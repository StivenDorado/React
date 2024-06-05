function Encabezado(){
    return (
     <ul className='hidden sm:flex sm:items-center sm:space-x-4 bg-black text-white'>
        <li className='item 
        p-4'><a href='#'>Inicio</a></li>
        <li className='item 
        p-4'><a href='#'>Nosotros</a></li>
        <li className='item 
        p-4'><a href='#'>Projectos</a></li>
        <li className='item 
        p-4'><a href='#'>Contacto</a></li>
        
     </ul>
     
     

    )
}

const container1 = document.getElementById('header');
const header = ReactDOM.createRoot(container1);
    header.render( 
        <>
            <ul className='hidden sm:flex sm:items-center sm:space-x-4 bg-black text-white'>
        <li className='p-4'><a href='#'>Inicio</a></li>
        <li className='p-4'><a href='#'>Nosotros</a></li>
        <li className='p-4'><a href='#'>Projectos</a></li>
        <li className='p-4'><a href='#'>Contacto</a></li>
        
     </ul>
        </>
            
    ); 



/* cuerpo de pagina img */

function Cuerpo(){
    return (
        
    <div>
        <img src='https://w.wallhaven.cc/full/72/wallhaven-72yzje.jpg' alt="Descripción de la imagen" />
     </div>
    )
}

const container2 = document.getElementById('main');
const main = ReactDOM.createRoot(container2);
    main.render( 
        <>
         <img src='https://w.wallhaven.cc/full/72/wallhaven-72yzje.jpg' alt="Descripción de la imagen" />

        <div class="bg-cover bg-center flex flex-col items-center  text-lg p-10">

            <h1 class="font-bold text-9xl">Tu título</h1>
            <p>trakaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </div>


    
        </>
            
    ); 




/* const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
    root.render( 
        <>
        <h1>Hola React </h1>
        <h2>hola pvtitas</h2>
        </>
            
    ); */




/* function Encabezado(){
    return <h1 className='color' >Soy el Encabezado!</h1>;
}
function Cuerpo(){
    return <h1>Soy el cuerpo del HTML!</h1>;
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
    root.render( 
        <>
            <Encabezado/>
            <Cuerpo/>
        </>
            
    );
 */