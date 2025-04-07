-- Trigger 1
BEGIN
	INSERT INTO bitacora(descripcion, fecha) VALUES(
		CONCAT('Se creó un nuevo proyecto, se llama ', NEW.denominacion),
        NOW()
	);
END

-- Trigger 2
BEGIN
	INSERT INTO bitacora(descripcion, fecha) VALUES(
		CONCAT('Se creó un nuevo proyecto, se llama ', NEW.denominacion),
		
        NOW()
	);
END


/*
Pregunta 1 ¿Qué utilidad tiene un trigger (ventajas)?
	R: Generación automática de los valores en la tabla.
	Menor error a la hora de inserciones.
	Mejor sincronización entre tablas.

Pregunta 2 ¿Tipos de triggers?
	R: Triggers DDL: (Data Definition Language), se activa cuando se modifica la estructura de la base de datos.
	Triggers DML: (Data Modification Language), se activa cuando se modifica los datos de una tabla. Tiene dos tipos, FOR/AFTER: se ejecutan después de la instrucción de disparo, INSTEAD OF: se ejecutan en lugar de la instrucción de disparo.

Pregunta 3 ¿En que casos NO son de utilidad?

Cuando la lógica de la base de datos es compleja o difícil de mantener ya que como los triggers pueden hacer que la lógica del sistema esté oculta dentro de la base de datos, lo que complica el mantenimiento, la depuración y la comprensión del sistema.

*/