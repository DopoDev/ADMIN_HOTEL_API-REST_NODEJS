CREATE TABLE "users" (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  creacion TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE "reservas" (
  id SERIAL PRIMARY KEY,
  id_user INTEGER NOT NULL,
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  FOREIGN KEY (id_user) REFERENCES "users" (id)
);

CREATE TABLE "Clientes"(
    "id_cliente" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NULL,
    "apellido" VARCHAR(100) NULL,
    "email" VARCHAR(255) NULL,
    "telefono" VARCHAR(30) NOT NULL,
    "direccion" VARCHAR(255) NOT NULL,
    "fecha_registro" DATE NOT NULL
);
ALTER TABLE
    "Clientes" ADD PRIMARY KEY("id_cliente");
ALTER TABLE
    "Clientes" ADD CONSTRAINT "clientes_email_unique" UNIQUE("email");

ALTER TABLE "Clientes"
ALTER COLUMN "fecha_registro" SET DEFAULT CURRENT_DATE;

CREATE TABLE "Servicios"(
    "id_servicio" SERIAL NOT NULL,
    "nombre_servicio" VARCHAR(255) NOT NULL,
    "costo" DECIMAL(10, 3) NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,
    "fk_empleado_id" SERIAL NOT NULL
);
ALTER TABLE
    "Servicios" ADD PRIMARY KEY("id_servicio");

CREATE TABLE "Reservas"(
    "id_reserva" SERIAL NOT NULL,
    "fk_cliente_id" SERIAL NOT NULL,
    "fk_habitacion_id" SERIAL NOT NULL,
    "fecha_inicio" DATE NULL,
    "fecha_fin" DATE NULL,
    "estado_pago" VARCHAR(50) NOT NULL DEFAULT 'Pendiente'
);
ALTER TABLE
    "Reservas" ADD PRIMARY KEY("id_reserva");

CREATE TABLE "Reserva_habitaciones"(
    "id_reservacion_habitacion" SERIAL NOT NULL,
    "fk_reserva_id" SERIAL NOT NULL,
    "fk_servicio_id" SERIAL NOT NULL,
    "fecha_reserva" DATE NULL,
    "cantidad" INTEGER NOT NULL
);
ALTER TABLE
    "Reserva_habitaciones" ADD PRIMARY KEY("id_reservacion_habitacion");

CREATE TABLE "Empleados"(
    "id_empleado" SERIAL NOT NULL,
    "nombres" VARCHAR(255) NULL,
    "apellidos" VARCHAR(255) NULL,
    "posicion" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NULL,
    "telefono" VARCHAR(255) NULL
);
ALTER TABLE
    "Empleados" ADD PRIMARY KEY("id_empleado");
ALTER TABLE
    "Empleados" ADD CONSTRAINT "empleados_email_unique" UNIQUE("email");
ALTER TABLE
    "Empleados" ADD CONSTRAINT "empleados_telefono_unique" UNIQUE("telefono");

CREATE TABLE "Pagos"(
    "id_pago" SERIAL NOT NULL,
    "fk_reserva_id" SERIAL NOT NULL,
    "fecha_pago" DATE NOT NULL,
    "monto_pagado" DECIMAL(10, 3) NOT NULL,
    "metodo_pago" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "Pagos" ADD PRIMARY KEY("id_pago");

CREATE TABLE "Habitaciones"(
    "id_habitacion" SERIAL NOT NULL,
    "numero_habitacion" INTEGER NULL,
    "tipo_habitacion" VARCHAR(255) NOT NULL DEFAULT '"individual"',
    "estado" VARCHAR(255) NOT NULL DEFAULT 'Disponible',
    "precio_noche" DECIMAL(10, 2) NOT NULL
);
ALTER TABLE
    "Habitaciones" ADD PRIMARY KEY("id_habitacion");
ALTER TABLE
    "Habitaciones" ADD CONSTRAINT "habitaciones_numero_habitacion_unique" UNIQUE("numero_habitacion");

ALTER TABLE
    "Reservas" ADD CONSTRAINT "reservas_fk_habitacion_id_foreign" FOREIGN KEY("fk_habitacion_id") REFERENCES "Habitaciones"("id_habitacion");
ALTER TABLE
    "Reserva_habitaciones" ADD CONSTRAINT "reserva_habitaciones_fk_reserva_id_foreign" FOREIGN KEY("fk_reserva_id") REFERENCES "Reservas"("id_reserva");
ALTER TABLE
    "Reservas" ADD CONSTRAINT "reservas_fk_cliente_id_foreign" FOREIGN KEY("fk_cliente_id") REFERENCES "Clientes"("id_cliente");
ALTER TABLE
    "Reserva_habitaciones" ADD CONSTRAINT "reserva_habitaciones_fk_servicio_id_foreign" FOREIGN KEY("fk_servicio_id") REFERENCES "Servicios"("id_servicio");
ALTER TABLE
    "Servicios" ADD CONSTRAINT "servicios_fk_empleado_id_foreign" FOREIGN KEY("fk_empleado_id") REFERENCES "Empleados"("id_empleado");
ALTER TABLE
    "Pagos" ADD CONSTRAINT "pagos_fk_reserva_id_foreign" FOREIGN KEY("fk_reserva_id") REFERENCES "Reservas"("id_reserva");

