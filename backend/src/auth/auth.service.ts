import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class AuthService {
  // NestJS otomatis menyuntikkan (inject) dua service ini
  constructor(
    private supabase: SupabaseService, // buat query database
    private jwt: JwtService,           // buat bikin token
  ) {}

  // Fungsi utama login: terima NIM + password, balikin token kalau valid
  async login(nim: string, password: string) {
    // 1. Cari user berdasarkan NIM di tabel "users"
    //    maybeSingle(): hasilnya 1 baris, atau null kalau tidak ketemu (tanpa error)
    //    Sesuaikan nama tabel/kolom dengan database lo
    const { data: user } = await this.supabase.db
      .from('users')
      .select('id, nim, password')
      .eq('nim', nim)
      .maybeSingle();

    // 2. Bandingin password input dengan hash di database
    //    Kalau user tidak ada, langsung dianggap tidak valid
    const valid = user && (await bcrypt.compare(password, user.password));

    // 3. Pesan error sengaja sama untuk "NIM tidak ada" dan "password salah"
    //    supaya orang tidak bisa menebak NIM mana yang terdaftar
    if (!valid) {
      throw new UnauthorizedException('NIM atau password salah');
    }

    // 4. Bikin token JWT. "sub" = id user (standar JWT), isinya jangan data sensitif
    const token = await this.jwt.signAsync({ sub: user.id, nim: user.nim });

    // 5. Kirim token ke React
    return { token };
  }
}