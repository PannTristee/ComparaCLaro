# Auditoría de imágenes del catálogo

Fecha de revisión: 24 de octubre de 2026  
Rama de trabajo: `mejora-catalogo-visual-2026-10`

## Resultado observado

- El catálogo contiene **83 fichas de modelo**.
- Hay **83 etiquetas de imagen** en el HTML original.
- **75 fichas usaban fotografías genéricas de Unsplash** (imágenes de categoría repetidas, no el producto exacto).
- Las otras **8 fichas enlazaban a imágenes alojadas en webs de terceros**. Que una imagen muestre el modelo no demuestra por sí solo que su uso comercial esté autorizado ni que la URL vaya a seguir activa.
- En el HTML había **32 URL de imagen distintas** para 83 fichas; varias se reutilizaban entre modelos diferentes.
- El código de error de imagen añadía otra fotografía genérica de tecnología cuando una imagen fallaba, lo que podía sugerir incorrectamente que era el producto concreto.

## Cambio aplicado en esta rama

- Las 75 fotos genéricas se sustituyen por un aviso visual neutro: **«Foto exacta pendiente de verificar»**.
- Si una imagen de tercero falla al cargar, ya no se sustituye por otra imagen genérica.
- Las fichas, búsquedas, filtros y enlaces de consulta permanecen disponibles.
- La página publicada no se ha modificado: estos cambios están solo en esta rama.

## Cómo completar la fotografía exacta de cada modelo

1. Confirmar el modelo, variante, color y capacidad exactos de cada ficha.
2. Obtener imágenes de una fuente con permiso de uso comercial o de un programa de afiliación que autorice expresamente sus materiales.
3. Si se usa Amazon Associates, revisar el acceso y las condiciones vigentes de su API de publicidad de productos; no simular imágenes ni generar URLs de imagen a partir de ASIN sin verificarlas.
4. Guardar la fuente, modelo asociado y fecha de comprobación en un inventario de activos.
5. Comprobar las 83 imágenes en escritorio y móvil y retirar cualquier imagen rota o que no coincida con la variante.

## Por qué no se añadieron imágenes de prensa de fabricantes sin más

La página de términos de Samsung Mobile Press limita el uso de sus materiales a fines personales, informativos y no comerciales salvo autorización aplicable. Por eso no he incorporado esas fotos a un sitio con posible monetización sin confirmar antes el permiso correspondiente.

## Próxima tanda recomendada

Priorizar 15 fichas de mayor intención de compra (móviles, portátiles, auriculares, tablets y consolas), obtener imágenes autorizadas y validar los enlaces. Después continuar por lotes para evitar asociar una fotografía al modelo equivocado.
