-- CreateTable
CREATE TABLE "Prod_Mat" (
    "Id" SERIAL NOT NULL,
    "producto" TEXT NOT NULL,
    "materiales" TEXT NOT NULL,

    CONSTRAINT "Prod_Mat_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Materiales" (
    "nombreMat" TEXT NOT NULL,
    "unidad" TEXT NOT NULL,
    "foto" TEXT,

    CONSTRAINT "Materiales_pkey" PRIMARY KEY ("nombreMat")
);

-- AddForeignKey
ALTER TABLE "Prod_Mat" ADD CONSTRAINT "Prod_Mat_producto_fkey" FOREIGN KEY ("producto") REFERENCES "Productos"("nombre") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prod_Mat" ADD CONSTRAINT "Prod_Mat_materiales_fkey" FOREIGN KEY ("materiales") REFERENCES "Materiales"("nombreMat") ON DELETE RESTRICT ON UPDATE CASCADE;
