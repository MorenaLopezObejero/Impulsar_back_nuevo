-- CreateTable
CREATE TABLE "Usuario" (
    "email" TEXT NOT NULL,
    "contasena" TEXT NOT NULL,
    "nombreUsu" TEXT NOT NULL,
    "foto" TEXT,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Emprendimiento" (
    "Id" SERIAL NOT NULL,
    "nombreEmp" TEXT NOT NULL,
    "colores" TEXT,
    "usuario" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "Emprendimiento_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "Emprendimiento" ADD CONSTRAINT "Emprendimiento_usuario_fkey" FOREIGN KEY ("usuario") REFERENCES "Usuario"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Emprendimiento" ADD CONSTRAINT "Emprendimiento_tipo_fkey" FOREIGN KEY ("tipo") REFERENCES "Typo_emprendimiento"("typo") ON DELETE RESTRICT ON UPDATE CASCADE;
