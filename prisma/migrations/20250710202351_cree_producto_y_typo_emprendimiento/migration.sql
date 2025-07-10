-- CreateTable
CREATE TABLE "Typo_emprendimiento" (
    "typo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "foto" TEXT,
    "producto" TEXT NOT NULL,

    CONSTRAINT "Typo_emprendimiento_pkey" PRIMARY KEY ("typo")
);

-- CreateTable
CREATE TABLE "Productos" (
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "pasos" TEXT NOT NULL,
    "herramientas" TEXT NOT NULL,
    "foto" TEXT,

    CONSTRAINT "Productos_pkey" PRIMARY KEY ("nombre")
);

-- AddForeignKey
ALTER TABLE "Typo_emprendimiento" ADD CONSTRAINT "Typo_emprendimiento_producto_fkey" FOREIGN KEY ("producto") REFERENCES "Productos"("nombre") ON DELETE RESTRICT ON UPDATE CASCADE;
