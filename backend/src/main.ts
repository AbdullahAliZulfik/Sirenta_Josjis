import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  // Membuat aplikasi backend
  const app = await NestFactory.create(AppModule);

  // Mengecek data yang masuk sesuai aturan yang kita buat nanti
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Mengizinkan halaman login kamu memanggil backend ini.
  // Tanpa ini browser akan menolak.
  // Angka 5173 adalah alamat bawaan Vite; sesuaikan kalau punyamu beda.
  app.enableCors({ origin: 'http://localhost:5173' });

  // Backend dijalankan di port 3000
  await app.listen(3000);
}
bootstrap();