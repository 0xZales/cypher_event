import affiche from "./assets/affiche.jpeg";
import programme from "./assets/programme.jpeg";
function App() {

  return (
    <div className="  text-white text-center md:px-[10%]  px-4 py-5">
      <div className="w-full h-[1px] bg-white md:block hidden"></div>
      <div className="w-full flex items-center justify-between md:h-20 h-16 ">
        <h1 className="md:text-[18px] text-[16px] font-bold ">
          Break The Code 2023
        </h1>
        <a href="https://twitter.com/yolo2064" target="_blank">
          {" "}
          <button className="h-[3rem] bg-white w-[12rem] rounded-full text-black font-bold">
            Reserver
          </button>
        </a>
      </div>
      <div className="w-full h-[1px] bg-white md:mt-0 mt-5 "></div>

      <div className="w-full text-left pt-8 mb-8  flex md:flex-row flex-col justify-center">
      <h1 className="md:text-[58px] text-[32px] font-bold mb-5 text-primary md:hidden block">
          Break The Code 2023
        </h1>
     <img src={affiche} className="md:w-[40%] w-full md:hidden block" alt="Affiche evenement" />

     <div className="md:w-2/4 w-full md:p-0 pt-5">
     <p className="md:text-[32px] text-[18px] md:leading-[60px] md:w-3/4 w-full md:text-left text-center ">
          Bienvenue dans les montagnes des Pyrénées, un monde d'aventure et de
          mystère où les sommets escarpés et les vallées verdoyantes offrent une
          échappatoire parfaite de la vie quotidienne.{" "}
        </p>
        <h1 className="md:text-[40px] text-[28px] font-bold mt-3 text-primary md:block hidden">
          Break The Code 2023
        </h1>
     </div>
     <img src={affiche} className="md:w-[30%] md:block hidden" alt="Affiche evenement" />

        {/* <div className="w-full h-[1px] bg-white "></div> */}
      </div>
      <div className=" flex md:flex-row flex-col items-center justify-center  w-full ">
        <div className="h-full md:w-1/4 w-full ">
          <p className=" md:text-[28px] text-[32px] md:text-left font-bold uppercase  ">
            Aventure - Détente Cryptographie - Bitcoin - Ski et autres
          </p>
        </div>
        <div className="h-full md:w-2/4 w-full  flex flex-col justify-start md:text-left gap-5 py-8 items-center">
          <p className="md:w-3/4 ml-8">
            Rejoignez-nous pour un voyage à travers ce paysage à couper le
            souffle, où l'esprit d'aventure rencontre les idéaux du mouvement
            cypherpunk et l'occasion d'apprendre à gagner de l'argent et à
            gagner sa liberté grâce à internet.
          </p>
          <p className="md:w-3/4 ml-8">
            Imaginez-vous en train de tailler dans la neige fraîchement tombée
            sur des skis ou un snowboard, en admirant les vues époustouflantes
            de la chaîne de montagnes majestueuse. En descendant les pentes,
            vous vous sentirez libre et libre, comme si vous viviez à l'âge de
            l'exploration et de la découverte.
          </p>
          <p className="md:w-3/4 ml-8">
            En explorant les stations de ski et les zones de hors-pistes, vous
            découvrirez des pistes cachées, des terrains passionnants et des
            refuges de montagne confortables. Vous aurez également l'occasion
            d'en apprendre davantage sur l'histoire et la culture riches des
            Pyrénées, des premiers colons aux habitants d'aujourd'hui.
          </p>
          <div className="md:w-3/4 h-[1px] bg-white"></div>
        </div>
      </div>
      <div className=" flex md:flex-row flex-col items-center justify-center  w-full ">
        <div className="h-full md:w-2/4 w-full bg-red-400 ">
            <img src={programme} className="w-full" alt="Affiche evenement" />
        </div>
        <div className="h-full md:w-2/4 w-full  flex flex-col justify-start md:text-left gap-5 py-8 items-center ">
          <p className="md:w-3/4 ml-8">
            Mais ce n'est pas un simple voyage de ski, ce voyage est
            spécialement conçu pour les Cypherpunks, où la confidentialité et la
            sécurité sont d'une importance primordiale. Notre équipe d'experts
            vous guidera dans l'utilisation d'outils de sécurité numérique tels
            que le chiffrement pour protéger vos communications et vos
            informations personnelles pendant le voyage.
          </p>
          <p className="md:w-3/4 ml-8">
            Vous aurez également l'occasion de rencontrer et de vous connecter
            avec des personnes partageant les mêmes passions que vous pour la
            confidentialité et la liberté numérique. Ensemble, vous explorerez
            les derniers développements en matière de cryptographie et de
            technologie bitcoin, et discuterez de la façon dont ces outils de
            pointe peuvent contribuer à bâtir une société plus juste et
            équitable.
          </p>
          <p className="md:w-3/4 ml-8">
            Mais ce voyage n'est pas seulement sur le ski et l'apprentissage de
            la sécurité numérique, il offre également la possibilité d'apprendre
            sur les bénéfices potentiels d'Internet et sur la façon de gagner de
            l'argent et de gagner sa liberté grâce à lui. De la création de
            votre propre entreprise en ligne à l'investissement dans la
            cryptographie et la compréhension du monde du commerce électronique,
            vous repartirez avec un riche savoir-faire et des outils pour vous
            aider à accompagner les vagues d’innovation au lieu de les subir.
          </p>
          <div className="md:w-3/4 h-[1px] bg-white"></div>
        </div>
      </div>
      <div className="md:m-5 w-full flex md:justify-around justify-center items-center md:flex-row flex-col gap-6 ">
        <p>Pour toutes reservation veuillez nous contacter </p>
        <a href="https://twitter.com/yolo2064" target="_blank">
          <button className="h-[3rem] bg-white w-[12rem] rounded-full text-black font-bold">
            Reserver une place
          </button>
        </a>
      </div>
      <footer className="w-full flex flex-col items-center justify-center gap-3">
        <div className="md:w-3/4 h-[1px] bg-white "></div>
        <p>© Copyright Break The Code 2023 </p>
      </footer>
    </div>
  );
}

export default App;
