import {useState,useEffect} from 'react';
import axios from 'axios';
import Navbar from '../Header/Navbar';
import Swipper from '../components/Parts/Swipper';
import  './PagesStyle/Home.css';
import FeaturedCategories from '../components/Parts/FeaturedCategories';
function Home(){

  useEffect(()=>{
    
    const getCountries = async()=>{
     
     
      try {
        const {data} = await axios.get('allJSONproducts')
        
        console.log(data)


       
   }
   catch (error){
     console.log('an eroo occured')
   }
    }
    getCountries()

},[])



 

  return<div>
   <Navbar />
   
    <div className='main-home'>
      <div className='section-1'>
        <Swipper/>
      </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam accusamus asperiores nemo autem, ab ratione? Eius quidem est earum facilis! Fuga reprehenderit aut asperiores nisi ipsa provident. Ut nam, pariatur veritatis veniam nisi nesciunt in alias earum expedita porro consectetur illo vel nostrum reiciendis soluta omnis eius voluptatem laboriosam? Fugit nulla dolorum veritatis molestiae maxime fuga nihil obcaecati, eius doloremque! Aut est nesciunt ad voluptatem doloribus maxime molestias autem eaque et totam? Nisi voluptatem dignissimos deleniti blanditiis ipsum inventore cupiditate quidem eaque, consequatur aliquid, ex possimus neque, ut corrupti quisquam. Pariatur quos inventore sequi, illum eius laboriosam temporibus molestiae expedita cumque sapiente corporis quis recusandae sed ad nesciunt esse eveniet necessitatibus quam officiis eaque magnam ex asperiores? Quis voluptatum sint eaque ipsum tenetur consequatur. Possimus sunt natus impedit corporis molestiae laboriosam, nisi exercitationem, ipsum nobis ipsam eveniet pariatur omnis non iste quasi id dignissimos consequatur nemo mollitia magni perferendis. Officiis hic aperiam excepturi maiores repellat asperiores provident quis ipsum corrupti sint voluptatem voluptatum vel totam dolor nemo, recusandae impedit quasi quod aut ab. Eligendi sunt aperiam fugiat odit qui? Quo quia tempore exercitationem saepe quasi minus tenetur sit repellendus vel consectetur suscipit, incidunt nobis aperiam, facilis deserunt officia vero alias eveniet fuga non distinctio quos! Repellendus quos autem eos laudantium inventore consequatur perferendis eveniet odio, error architecto. Magnam fuga voluptas harum cumque a libero. Facere reiciendis at aperiam, culpa iure delectus alias consectetur! Sint unde quidem iusto, quis id reiciendis dolores numquam, soluta ex, minus at doloribus fugiat ea. Sequi maxime inventore iusto voluptatum ipsa minus, dicta numquam dolorum suscipit sint iste, aspernatur exercitationem minima rerum labore quos quam placeat quae cum excepturi corporis! Vitae odio reiciendis qui consequuntur debitis repudiandae veritatis? Nihil, fugit sint velit soluta temporibus perferendis eos quidem doloribus ut est maiores iusto quam excepturi repellat tempora ratione. Optio et ipsam, commodi cum fugiat maxime illum quae cupiditate explicabo excepturi dolores ea nisi maiores quibusdam impedit odit officiis vitae, veniam quia dolor consequatur? Rerum laboriosam esse facere cum aut magni ea quod ad unde id, aliquid molestias porro pariatur ab nobis sint nemo fuga dicta corrupti. Expedita dolorum nobis itaque commodi laborum magnam iure, qui, alias maxime inventore quis voluptates excepturi? Illo iure voluptatibus provident velit tempore qui doloremque? Molestiae at, corporis perspiciatis praesentium iste aut excepturi laboriosam, aliquid pariatur fugit quas possimus doloribus repellendus rem, ut corrupti magni assumenda nobis. Unde fuga impedit suscipit inventore quibusdam laborum at, possimus mollitia numquam dignissimos velit! Exercitationem molestiae ex repellat reiciendis reprehenderit ut accusamus placeat necessitatibus mollitia quis a maiores alias inventore illum, quo recusandae ratione nulla ad molestias, aperiam quisquam voluptas ducimus asperiores beatae. Pariatur aliquam rerum iste possimus veritatis quis vero fugit iure nostrum minima delectus placeat fuga, libero reiciendis blanditiis illo ratione provident deleniti eos voluptate nemo suscipit. Beatae quas tenetur, ratione quam atque adipisci possimus dolorem culpa similique recusandae illo omnis sunt nulla in modi, veritatis eius, corporis neque aspernatur. Deserunt debitis quas, illo, quisquam distinctio soluta facilis voluptatibus perspiciatis ad tenetur suscipit molestiae nulla quos sequi eveniet sunt repudiandae perferendis minus provident sint numquam consequatur accusantium animi atque! Possimus sed tempore perferendis adipisci repellendus facere totam, nostrum dolore laboriosam atque minima voluptatem facilis quibusdam? Odio, provident! Vitae minus fugit assumenda eius, debitis neque, doloribus et soluta eos numquam eaque. Possimus, praesentium. Sint dolorem neque deserunt rem doloribus aperiam dolor laboriosam nostrum voluptates labore, perferendis eos ex inventore ducimus nesciunt magni amet atque recusandae temporibus numquam blanditiis cumque. Ab, eligendi repellendus sit omnis odio dolorum pariatur a officia voluptate eius nisi possimus voluptates nobis repudiandae, ea laboriosam at libero! Velit, nostrum? Laboriosam sunt facilis sit officiis expedita earum! Error iste ullam unde quo eveniet totam maiores provident molestiae rem, nemo tempore fugiat perferendis aspernatur atque esse nihil pariatur ipsa dolores libero ratione. Quae provident eaque, accusantium iusto, repellendus numquam debitis sint quibusdam tenetur mollitia vero quidem quas. Saepe non dolorum mollitia porro sunt aliquam eos quis totam quod alias officiis autem odit unde, assumenda ipsa suscipit praesentium soluta deserunt! Nobis iure illo maiores facilis reprehenderit sed provident error, neque quas fugit. Quos eos maiores dolores, nesciunt quibusdam consequatur, reprehenderit saepe voluptates cupiditate voluptatem omnis quis, reiciendis at nam voluptate nisi? Similique vel laudantium ducimus quos voluptate, iusto inventore maxime quam deserunt soluta consequuntur dolores debitis nam, quibusdam distinctio fuga quae harum rerum maiores, eius eos officia! Voluptate nostrum laudantium reprehenderit accusantium nesciunt rem consequatur et cum nisi porro nihil eaque neque at vel tempora nam, tempore maiores odit possimus eius pariatur corrupti? Alias, libero distinctio voluptatibus nobis facilis voluptatum, qui expedita inventore dolore, deserunt maiores repellat rem ea quasi quos. Odit, repellat? Praesentium, possimus! Reiciendis ex iusto magni, ea nihil aperiam eaque dicta et sunt consequatur nisi repellat voluptatem, officiis minus aliquid at nobis quo voluptas autem. Dolores eius quo necessitatibus maxime tempora, doloremque a ullam fuga distinctio vitae perspiciatis sequi consequuntur corrupti labore, dolorem quae harum minus sed quasi officia! Architecto ipsum odio illo aut dignissimos magnam eligendi reprehenderit illum, accusamus nostrum recusandae cum sapiente sint repellendus distinctio ipsa. Ea porro laborum doloribus nostrum quis delectus eaque cupiditate libero atque sunt ducimus dolorum, at beatae nihil dignissimos similique alias magnam. Eius suscipit fugit quo ea delectus voluptatibus quidem aliquid quibusdam, laudantium, quas laborum? Veniam animi similique amet id voluptate iusto hic accusamus repellendus adipisci cupiditate porro, officiis autem deserunt doloribus illum facere ut iste! Fugit id eos facere quos rem deserunt placeat praesentium necessitatibus reprehenderit soluta dolor repudiandae dicta temporibus impedit modi, ipsa iure laborum nobis eveniet recusandae, dolorum voluptate! In aut ullam nisi iste inventore mollitia, blanditiis nobis quasi ratione doloremque? Ab voluptas nulla mollitia fugiat deleniti at doloremque, eum nihil nam voluptates nesciunt quasi, ullam impedit quas soluta, cupiditate hic error? Fuga quae mollitia optio nesciunt natus reprehenderit cum, sed ea a nemo et molestiae atque obcaecati in consequuntur earum suscipit sapiente deserunt repudiandae ipsam nisi sit debitis? Numquam nisi neque accusamus modi eum velit minima distinctio pariatur veritatis assumenda, laborum illo sunt optio cupiditate quam perspiciatis enim quos, tenetur est.
    </div>
   
  </div>
}

export default Home