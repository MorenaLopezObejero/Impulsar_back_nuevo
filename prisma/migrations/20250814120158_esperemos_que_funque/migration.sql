-- CreateTable
CREATE TABLE "Contactos" (
    "Id" SERIAL NOT NULL,
    "nombre" TEXT,
    "email" TEXT,
    "telefono" INTEGER,
    "redes_soc" TEXT,
    "notas_perz" TEXT,
    "foto" TEXT,
    "host" TEXT NOT NULL,

    CONSTRAINT "Contactos_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "Contactos" ADD CONSTRAINT "Contactos_host_fkey" FOREIGN KEY ("host") REFERENCES "Usuario"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
