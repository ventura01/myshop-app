import React from "react";

type Props = {};

const TermsAndConditions = (props: Props) => {
  return (
    <div className="container max-w-screen-lg mx-auto my-20">
      <div className="mx-4 md:mx-0 text-justify md:text-left">
        <h1 className="text-xl text-gray-800 font-bold mb-3">
          Términos y Condiciones de Uso
        </h1>
        <p className="text-gray-600 my-2">
          Bienvenido a Farmacia Zulmita. Antes de utilizar nuestro sitio web, te
          pedimos que leas detenidamente estos Términos y Condiciones de Uso. Al
          acceder y utilizar nuestro sitio web, aceptas cumplir y estar sujeto a
          estos términos. Si no estás de acuerdo con alguna parte de estos
          términos, te recomendamos que no utilices nuestro sitio web.
        </p>
        <h2 className="font-semibold text-gray-800 mt-2">Uso del Sitio Web</h2>
        <p className="text-gray-600 my-2">
          El contenido de este sitio web es solo para fines informativos y no
          constituye asesoramiento médico ni sustituye la consulta con un
          profesional de la salud. No nos hacemos responsables de ninguna
          decisión tomada en base a la información proporcionada en este sitio.
        </p>
        <h2 className="font-semibold text-gray-800 mt-2">
          Registro y Cuenta de Usuario
        </h2>
        <p className="text-gray-600 my-2">
          Para acceder a ciertas áreas o servicios de nuestro sitio web, es
          posible que necesites registrarte y crear una cuenta de usuario. Es tu
          responsabilidad proporcionar información precisa y mantener la
          confidencialidad de tu cuenta y contraseña. Aceptas notificarnos de
          inmediato cualquier uso no autorizado de tu cuenta.
        </p>
        <h2 className="font-semibold text-gray-800 mt-2">
          Propiedad Intelectual
        </h2>
        <p className="text-gray-600 my-2">
          Todo el contenido y materiales disponibles en este sitio web,
          incluyendo, entre otros, texto, gráficos, logotipos, imágenes y
          software, están protegidos por leyes de propiedad intelectual y son
          propiedad de Farmacia Zulmita o sus licenciantes. No tienes permiso
          para utilizar, copiar, reproducir, modificar, distribuir o transmitir
          ninguno de los contenidos de este sitio sin nuestro consentimiento
          previo por escrito.
        </p>
        <h2 className="font-semibold text-gray-800 mt-2">
          Enlaces a Sitios de Terceros
        </h2>
        <p className="text-gray-600 my-2">
          Nuestro sitio web puede contener enlaces a sitios web de terceros que
          no están controlados por nosotros. No nos hacemos responsables del
          contenido, la precisión o las prácticas de privacidad de estos sitios
          web. El acceso y uso de cualquier sitio web de terceros se rige por
          los términos y condiciones de uso y las políticas de privacidad de ese
          sitio.
        </p>
        <h2 className="font-semibold text-gray-800 mt-2">
          Limitación de Responsabilidad
        </h2>
        <p className="text-gray-600 my-2">
          En la medida máxima permitida por la ley, Farmacia Zulmita y sus
          afiliados no serán responsables por ningún daño directo, indirecto,
          incidental, especial, consecuente o punitivo que surja del uso o la
          imposibilidad de utilizar este sitio web.
        </p>
        <h2 className="font-semibold text-gray-800 mt-2">
          Cambios en los Términos y Condiciones
        </h2>
        <p className="text-gray-600 my-2">
          Nos reservamos el derecho de actualizar o modificar estos Términos y
          Condiciones en cualquier momento. Cualquier cambio entrará en vigencia
          inmediatamente después de su publicación en nuestro sitio web. Te
          recomendamos que revises periódicamente esta página para estar al
          tanto de cualquier cambio.
        </p>
        <h2 className="font-semibold text-gray-800 mt-2">Contacto</h2>
        <p className="text-gray-600 my-2">
          Si tienes alguna pregunta o inquietud sobre estos Términos y
          Condiciones de Uso, no dudes en ponerte en contacto con nosotros a
          través de info@farmaciazulmita.com o 2222-5555.
        </p>
        <p className="text-gray-600 my-2">
          Gracias por elegir Farmacia Zulmita.
        </p>
        <p className="text-gray-600 my-2">Fecha de Entrada en Vigor: [Fecha]</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
