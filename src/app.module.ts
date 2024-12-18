import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { HorarioModule } from './horario/horario.module';

@Module({
  imports: [FuncionarioModule, PrismaModule, AuthModule, HorarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
