<?php

use Illuminate\Database\Seeder;
use App\Models\Article;
use App\Models\Document;
use Carbon\Carbon as Carbon;
use App\Models\Category;

class ArticleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $faker = Faker\Factory::create(); 
        /** MUST TO DO IN LADAKH*/
        $category1 = Category::find(1);
        /*festivals*/
        $category2 = Category::find(2);
         /*top-things-to-do*/
        $category3 = Category::find(3);
        /*places*/ 
        $category4 = Category::find(4);
        /*history-and-cultures*/
        $category5 = Category::find(5);
        /*art-and-craft*/ 
        $category6 = Category::find(6);
        /*adventure-sport*/
        $img = Document::create([
            'filename' => $faker->lastName(),
            'path' => 'img/articles/pangonglake1.jpg',
            'type' => 'gallery'
        ]);
            /* article 1 */
        $thumbnail = Document::create([
            'filename' => 'Ice hockey',
            'path' => 'img/articles/icehockey.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Ice hockey',
            'path' => 'img/articles/icehockey2.jpg',
            'type' => 'banner'
        ]);   
        $article1 = Article::create([
            "author_id" => '1',
            "title" => 'Ice hockey',
            'slug' => 'ice-hockey',
            'order' => 1,
            "content" => '<b>Ladakh</b> is well-known for its pristine natural beauty and spiritual places like monasteries and stupas, but now it has also come to be known as emerging destination for lovers of winter sports like Ladakh ice hockey and ice skating. Since Ladakh is one of the few places in India that freezes in winter. As north India comes under the grip of chill, the cold desert of Ladakh gears up for winter sports, skating and ice-hockey which are hugely popular. Ice hockey Ladakh, also called shinny or pond hockey, are a way of life during the long winters in Ladakh.
            In winter Karzoo Ice Hockey Rink witnessed an enlivening and festive atmosphere. The natural ice is good for skating every January, plus a week or two of December and February. The mountainous region of Ladakh has possibly the country’s highest ice-skating rink at 3483 m above sea level. There is a tremendous potential for Ladakh ice hockey to grow in Ladakh. With the superior snow conditions and the convenience of frozen stream and lakes in the region enthusiasts for the sport is growing.
            <br/><br/>
            In 2008 first time an Indian ice hockey Ladakh team participated in the ‘Asian Challenge Cup’ which was in Abu Dhabi. In this team the majority of the players were Ladakhis. By this news we can determined the fame of winter sports in Ladakh.
            <br/><br/>
            The history of ice hockey in ladakh dates back to the early 70s when the Ladakh Scouts Battalion of the Indian army, who were posted in the higher reaches of the border regions, started playing the game.
            <br/><br/>
            The history of ice hockey in ladakh started in early 70s when the Ladakh Scouts Battalion of the Indian army was transferred in boundary regions they started playing the ice hockey. The local Ladakhis took pleasure in this Ice hockey but due to lack of sports equipments it began difficult to manage and the first teams started by getting the ice skating blades from Shimla. They nailing them to the army boots which was rather a feat to stability those giant boots wearing 3 – 4 coats of socks inside on the blades but this were how they started. The few locals who have contacts outside Ladakh have requested friends to get ice hockey skates. The Ladakh Scouts are well fortified as they get their gear through the army. The Jammu & Kashmir department of tourism also has a full set of equipment, but is unwilling to spare any. The only place in India where ice sports equipment is willingly available is Shimla, a small hill station in the northwestern part of India, where two Chinese brothers began making skates that are still used today.
            <br/><br/>
            Roller skates and ground hockey sticks were also used. To create pucks, locals cut the thick, rubber heels of army boots into a rounded shape. Goal keepers wore ground hockey pads but lacked helmets; neither helmets nor knee and elbow pads were used by other players. Despite injuries due to this lack of defensive gear, the game has sustained to grow in popularity in the region.',
            "slug" => 'icehockey',
            "must_to_do" => true,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article1->categories()->attach($category6);
        //$article1->categories()->attach([1,2,3,4,5,6]);
        $article1->images()->attach([$img->id]);
/*end article 1*/ 
/*article 2*/
        $thumbnail = Document::create([
            'filename' => 'Wood-carving',
            'path' => 'img/articles/woodcarving.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Wood-carving',
            'path' => 'img/articles/woodcarving2.jpg',
            'type' => 'banner'
        ]);
      //  $category2 = Category::find(2);
        $article2 = Article::create([
            "author_id" => '1',
            "posted_at" => $faker->dateTime(),
            //"created_at" => $faker->dateTime(),
            "must_to_do" => 1,
            'title' => 'Wood carving',
            'slug' => 'wood-carving',
            'order' => 2,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,'content' => 'Located in a high altitude desert, Ladakh is a region with limited resources. Wood is definitely one of them, as a scarce commodity and one that is highly valued, it is used sparingly in both the secular and sacred lives of the people there. Some of the common trees found in Ladakh are the Juniper, Willow, Poplar, Tamarisk and Pencil-cedar. Fruit trees include apple, apricot, walnut, pear, cherry and mulberry. Varieties of wood have also come in through trade, mainly from Kashmir and other neighbouring areas.

            Woodcarving is an important art form in Ladakh, wherein elaborate, exquisite and exclusive designs are etched on wood. A master wood carver is called a Shing-spon or Shing-mkhan, while the master of the craft of painting upon wood is called a Tsi-spon. It takes several years to hone this artform. However, once mastered it serves as a sustainable livelihood opportunity for artisans.
            
            Woodcarving is widely visible on vernacular architecture of Ladakh, on homes as well as religious buildings, mainly monasteries and mosques. The designs and patterns reflect an indigenous style, as well as influence from Tibet, Kashmir and Central Asia. Usually found as an embellishment for decorative and aesthetic appeal, the beams, pillars, columns, windows and balconies of buildings are adorned with the carvings. Woodcarving is also used as a decorative element on furniture, especially folding tables (choktsey). In religious spaces carved furniture can be seen in altars, thrones, and incense burners. Walnut wood is used for making wooden printing blocks (par shing) used to hand print Buddhist religious texts on paper as well as prayer flags.',
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
            ]);
        $article2->categories()->attach($category5);
        $article2->images()->attach([$img->id]);
        /*end article 2*/ 
        /*article 3*/
        $thumbnail = Document::create([
            'filename' => 'Birdwatching',
            'path' => 'img/articles/birds.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'bird watching',
            'path' => 'img/articles/birds2.jpg',
            'type' => 'banner'
        ]);
        //$category3 = Category::find(3);
        $article3 = Article::create([
            "author_id" => '1',
            'title' => 'Bird watching',
            'slug' => 'bird-watching',
            'order' => 3,
            "must_to_do" => 1,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => 'Humans and nature have a strong relationship since time immemorial. Ladakh being a region between Pale-arctic and Indo Himalayas, is a home for more than 300 bird species. As per their behaviour of visiting pattern different groups of birds are known to be found here viz, resident birds like Black Billed Magpie, Cinereous tit, Red and Yellow billed Chough, etc., Summer birds like Hume’s Groundpecker, Eurasian Golden Oriole, Citrine and Grey Wagtails, etc., Winter Birds like Dark Throated Thrush, Water Rail, etc. and Migratory Birds like European Turtle Dove, Black Headed Gull, etc. Theimportant birding areas are at Chanthang, Hanley, Phey- Spituk marshes, Shey- Thiksey marshes, Nubra Valley, Tsokar Lake and Tsomoriri Lake. Ladakh, being a tourist hotspot as well as an active place for birds, bird watching can be explored to very good extent. The ecosystem of Ladakh is too fragile and that promotion of this area must be done with a proper planning and in a controlled and conservative manner.',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article3->categories()->attach($category2);
        $article3->images()->attach([$img->id]);
        /*end article 3*/ 
        /*article 4*/
        $thumbnail = Document::create([
            'filename' => 'Rafting',
            'path' => 'img/articles/rafting.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Rafting',
            'path' => 'img/articles/rafting2.jpg',
            'type' => 'banner'
        ]);
        //$category4 = Category::find(4);
        $article4 = Article::create([
            'title' => 'Rafting',
            "author_id" => '1',
            'slug' => 'rafting',
            'order' => 4,
            "must_to_do" => 1,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => 'One of the many wonderful activities that the landscape of Ladakh offers its guests is river rafting. River Rafting in Ladakh is one of the most underappreciated activities in the region, but also one of the most adventurous. Ladakh is home to the Indus River, which flows across its northern region before entering Pakistan. Though the river rafting in Leh is just beginning to gain momentum, the rapids to be found within it are of a force and intensity that make rafting in it a marvellous experience.
            <br/><br/>
            Rafting can also be enjoyed on the rapids of the Zanskar river. The force of the waters along with the twists and turns of the river makes whitewater rafting on the Zanskar a memorable adventure. The majesty of the Ladakh landscape adds a lot of depth to the act of rafting.
            <br/><br/>
            The towering mountains, the chilly winds, the fresh aromas in the air, the freezing waters and the sense of possibility that hangs in the air, all make Ladakh white water rafting a peculiarly intense experience. You can choose the rapid based upon the level of difficulty you are willing to undertake since the rivers have rapids ranging from level I to level IV.
            <br/><br/>
            Rafting in Leh is not a dangerous experience and can be enjoyed with an easy mind and an eager heart. River rafting adds depth to your Ladakh tour and allows you to enjoy the region in a different manner. Whitewater rafting is not simply an adventure activity you undertake in Ladakh, it is an experience you live through.',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article4->categories()->attach($category6);
        $article4->images()->attach([$img->id]);
        /*end article 4*/ 
        /*article 5*/
        
        $thumbnail = Document::create([
            'filename' => 'Mountain Biking',
            'path' => 'img/articles/mountainbiking.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Mountain Biking',
            'path' => 'img/articles/mountainbiking2.jpg',
            'type' => 'banner'
        ]);
      //  $category5 = Category::find(5);
        $article5 = Article::create([
            'title' => 'Mountain Biking',
            "author_id" => '1',
            'slug' => 'mountain-biking',
            'order' => 5,
            "must_to_do" => 1,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => 'Mountain biking is an adventurous activity that is exercised on off roads that are gravel, rough and mountainous terrains generally spread on steep and narrow trails. Ladakh’s high mountainous terrain and the alluring landscapes are ideally placed for a potential mountain biking destination.

            All the 80,000 square kilometres of The Union Territory of Ladakh can be utilized for different mountain biking activities. The village trekking routes for ‘Trail riding’ and ‘Enduro riding steep mountains for ‘Free riding’, gravel roads for long distance ‘XC (cross country) riding’ and much more, surrounded by the magnificent landscape of the Trans Himalayan ranges. These rides will not only provide the rider a complete riding satisfaction but will also enlighten them about the rich culture, tradition and history of Ladakh at a personal level.
            
            Some of the already established Mountain biking trails are Shyam single track, Markha single track, Rumbak single track, etc and a lot of new and exciting trails are being developed by Mountain Bike community of Ladakh.',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article5->categories()->attach($category6);
        $article5->images()->attach([$img->id]);
        /*end article 5*/ 
        /*article 6*/
         
        $thumbnail = Document::create([
            'filename' => 'Likir pottery',
            'path' => 'img/articles/likirpottery.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Likir pottery',
            'path' => 'img/articles/likirpottery.jpg',
            'type' => 'banner'
        ]);
       // $category6 = Category::find(6);
        $article6 = Article::create([
            'title' => 'Likir pottery',
            "author_id" => '1',
            'slug' => 'likir-pottery',
            "must_to_do" => 1,
            'order' => 6,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => 'The village of Likir is highly renowned for its handmade pottery. It is said that at one point, everyone who lived in Likir was a potter. However, nowadays, only a couple of families practice this art. Aba Lamchung Tsephel’s family is one of them.

            Aba Tsephel believes that this craft travelled from Tibet. The reason it developed in Likir was the proximity of the village to the source of the clay. This comes from a particular mountain across the valley from them. The clay is carefully mixed with fine sand and water in specific proportions.The pottery gets its distinct color from Sulphur prevalent in the hot springs of Puga in the Changthang Plateau. [they add Sulphur to the clay mixture] Likir potters fashion a range of products from the clay, these include decorative pieces, incense pots, lamps, teapots, water jugs, vessels for brewing chang (barley beer), pots for storing grain amongst other containers.
            
            Sunlight and simple kilns are used for drying and baking the pots. Artisans ensure the strength of the pots by submerging them in water, with the result that only the strong ones remain intact.
            
            Although the art has not survived as an occupation amongst all the residents of the village, Aba Tsephel hopes it will survive through the few interested artisans from Ladakh, and other parts of the world, that now come to learn at his workshop.',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article6->categories()->attach($category5);
        $article6->images()->attach([$img->id]);
        /*end article 6*/ 
        /*article 7*/

        $thumbnail = Document::create([
            'filename' => 'Metal work',
            'path' => 'img/articles/metalwork.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Metal work',
            'path' => 'img/articles/metalwork.jpg',
            'type' => 'banner'
        ]);
        
        $article7 = Article::create([
            'title' => 'Metal work',
            "author_id" => '1',
            'slug' => 'metal-work',
            "must_to_do" => 0,
            'order' => 7,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => 'Sculptors in Ladakh have created some of the finest ritual and domestic objects for both lay and monastic patrons throughout the centuries, working with the medium of metal. From fashioning large-scale figures of the Buddha in copper gilt at Basgo and Shey monasteries, to shaping smaller items for domestic use including a variety of spoons and pots for cooking food.
            <br/><br/>
            While sculpture developed in the region, external influences also played a role in its artistic growth. This probably began with Kashmir as there is a large presence of metal sculptures of Buddhist deities from the region in many temples in Ladakh, dating from as early as the 8 th century. Another group of highly skilled metalworkers in Ladakh were immigrants from Nepal, who came to Ladakh in the late 16 th century on invitation of the King Sengge Namgyal. They were commissioned to make the large Buddha figure at Shey monastery, many of them stayed on as the King accorded them a high status.
            <br/><br/>
            They went on to make numerous more monastic commissions, and also fabricate a wide range of domestic vessels in brass and copper. Many of the descendants of the group who came from Nepal now live in the village of Chilling, about 56 kilometres away from Leh. Silver and gold are also the most commonly used metals for making jewellery.
            <br/><br/>
            The art has its decorative, domestic and religious use. Initially the art was limited to building stupas, statues and other monastic works. However, it has evolved and now caters to demands of the local people. Today, metal wares can be ubiquitously spotted in every traditional house, especially in the kitchens. The arrangement of metal plates, kettles, cups and bowls, among other utensils, on a the wooden shelves in a kitchen is a marker of the family’s wealth and prosperity.
            <br/><br/>
            Today, it is lamented that the skill is not imbibed widely by the youth. This is only partly true because individuals, albeit few, are dedicated to promoting the art.
            <br/><br/>
            As an initiative to sustain the traditional knowledge, an annual exhibition of metalworks is held at Chilling Heritage Home in collaboration with the Youth Association for Conservation and Development of Hemis High Altitude National Park. The Heritage Home also houses a museum displaying many artifacts and historical documents related to the craft.',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article7->categories()->attach($category5);
        $article7->images()->attach([$img->id]);
        /*end article 7*/ 
        /*article 8*/
        $thumbnail = Document::create([
            'filename' => 'Jewelleries of Ladakh',
            'path' => 'img/articles/jewelleriesofladakh.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Jewelleries of Ladakh',
            'path' => 'img/articles/jewelleriesofladakh.jpg',
            'type' => 'banner'
        ]);
      
        $article8 = Article::create([
            'title' => 'Jewelleries of Ladakh',
            "author_id" => '1',
            'slug' => 'jewelleries-of-ladakht',
            "must_to_do" => 0,
            'order' => 8,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => 'Perak:<br/>
            In Ladakh, a woman attire is dominated by her headdress known as Perak. Traditionally, it is given to the eldest daughter when she gets married. Owning a ‘Perak’ represents the status symbol for a Ladakhi woman as the number and quality of turquoises represents her wealth. Adding pearl earrings along with two black woolen flaps known as ‘Tsaru’ then completes the ornament.
            <br/><br/>
            The perak headdress resembles a snakeskin and from the front, it resembles a raised cobra. The snake imagery is deliberate as women in Ladakh are traditionally associated with the lu, the underworld spirits of the waters.
            <br/><br/>
            Ga’u:<br/>
            Ornaments worn around neck are known as Skecha in Ladakh. It is there in a variety of types. Ga’u is one of the most significant neck ornaments in a woman’s attire. Ga’u is a gold or silver amulet with precious stones embedded in it. It is then embodied with freshwater pearls and corals or turquoise stones to make a remarkable necklace worn around the neck.',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article8->categories()->attach($category3);
        $article8->images()->attach([$img->id]);
        /*end article 8*/ 
        /*article 9*/
        
        $thumbnail = Document::create([
            'filename' => 'Pashmina from Changthang',
            'path' => 'img/articles/pashminafromchangthang.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Pashmina from Changthang',
            'path' => 'img/articles/pashminafromchangthang.jpg',
            'type' => 'banner'
        ]);
        $article9 = Article::create([
            'title' => 'Pashmina from Changthang',
            "author_id" => '1',
            'slug' => 'pashmina-from-changthang',
            "must_to_do" => 0,
            'order' => 9,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => 'Pashmina (known as lena in Ladakhi) is recognised as a luxury fibre and commands some of the highest prices in the world of textiles because of its extreme softness, elegance, and warmth. It comes from the warm undercoat of pashmina goats, also known as Shawl goat or Northern goat, herded by nomadic pastoralists on the Changthang, sometimes at altitudes ashigh as eighteen thousand feet in icy cold winds.
            <br/><br/>
            Pashmina is generally combed out of the goats in the month of June. Good quality pashmina is determined by a long staple length and small diameter. Pashmina from Ladakh’s Changthang, especially the eastern areas of Kharnak, Korzok and Rupshu are said to be of the finest quality because they have these features.
            <br/><br/>
            Once combed the pashmina is traded to Leh, or further to Kashmir, the production process then starts. This is quite elaborate and begins with cleaning and carding the fibre. It is then spun on a drop spindle or a charka (spinning wheel), after which the warp is laid. Weaving is generally done on a fly shuttle loom in Ladakh. Often natural colours are used, but now some people are showing a penchant for organic dyes.
            <br/><br/>
            Pashmina today remains one of the main economic assets Ladakh possesses. This unique resource has placed the region on the world map as the producer of some of the finest Pashmina (Cashmere) wool in the world. The change in weather patterns, out migration of the youth and abandoning of nomadic lifestyles are few emerging threats in the craft of producing Lena.',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article9->categories()->attach($category3);
        $article9->images()->attach([$img->id]);
        /*end article 9*/ 
        /*article 10*/

        $thumbnail = Document::create([
            'filename' => 'Rock climbing',
            'path' => 'img/articles/rockclimbing.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Rock climbing',
            'path' => 'img/articles/rockclimbing.jpg',
            'type' => 'banner'
        ]);
        $article10 = Article::create([
            'title' => 'Rock climbing',
            "author_id" => '1',
            'slug' => 'rock-climbing',
            "must_to_do" => 0,
            'order' => 10,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => 'Rock climbing has emerged as a new adventure sport in Ladakh. In the recent years the growing size of climbers and others with interest for the sports has led to an event called Suru Boulder Fest, which won the prestigious UIAA Rock Climbing Festival Award for 2019. The climbers have now identified many boulders ideal for climbing and each year they discover more to add to the long list of climber’s destinations. Some of the popular boulder sites are Suru valley, Ney, Saspotsey, Shey, Taru etc.',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article10->categories()->attach($category6);
        $article10->images()->attach([$img->id]);
        /*end article 10*/ 
        /*article 11*/
        $thumbnail = Document::create([
            'filename' => 'Trekking',
            'path' => 'img/articles/trekking.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Trekking',
            'path' => 'img/articles/trekking.jpg',
            'type' => 'banner'
        ]);
        $article11 = Article::create([
            'title' => 'Trekking',
            "author_id" => '1',
            'slug' => 'trekking',
            "must_to_do" => 0,
            'order' => 11,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => '“Somewhere between the bottom of the climb and the summit is the answer to the mystery why we climb.” - Greg Child
            <br/><br/>
            Ladakh offers some wonderful and exciting trekking experiences to the visitors. This Himalayan region is a haven for those seeking adventure in the lap of mountains and peaks. There are many trekking options in Ladakh, which vary in difficulty and duration. A few treks take two weeks to complete while some could be completed inside three days. Nonetheless, any of these treks will leave you with unforgettable memories.
            <br/><br/>
            First-timers and families travelling with kids could do an easy trek whereas those looking for a challenging experience can opt for a longer trek crossing multiple passes above 5000 metres and even attempt the ascent of a 6000-metre peak.
            <br/><br/>
            Solo travellers or small groups who are interested in joining a larger group can check out our fixed departure treks.
            <br/><br/>
            The best time for trekking in Ladakh is from May to October. However, some treks are possible only from early July due to heavy snowfall on the mountain passes in winters. The onset of winter marks the beginning of two treks that are organised from January to March every year in Ladakh: the Chadar trek on the frozen Zanskar river and the Snow Leopard trek.
            <br/><br/>
            1.Markha valley trek<br/>
            2.Nubra valley trek from Phyang to Hunder<br/>
            3.Rumtse to Tso Moriri trek<br/>
            4.Sham valley trek<br/>
            5.Stok Kangri climb (6153m)<br/>
            6.Spituk to Stok trek<br/>
            7.Lamayuru to Alchi trek<br/>
            8.Zanskar trek from Padum to Lamayuru<br/>
            9.Snow Leopard trek<br/>
            10.Chadar frozen river trek',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article11->categories()->attach($category6);
        $article11->images()->attach([$img->id]);
        /*end article 11*/ 
        /*article 12*/

        $thumbnail = Document::create([
            'filename' => 'Ladakh festival',
            'path' => 'img/articles/ladakhfestival.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Ladakh festival',
            'path' => 'img/articles/ladakhfestival.jpg',
            'type' => 'banner'
        ]);
        $article12 = Article::create([
            'title' => 'Ladakh festival',
            "author_id" => '1',
            'slug' => 'ladakh-festival',
            "must_to_do" => 0,
            'order' => 12,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => 'The Department of Tourism sponsor a 7 days Ladakh Festival every year for promotion of Tourism. The main aim of organising this festival in the month of September is to extend the lean tourist season in the region and also to represent and prorogate the rich cultural heritage of the area. The grand success of the festival and the tremendous response from both foreign and home tourists is due to the rich cultural heritage and variety of other attractive programmes like traditional Polo match and Village archery. The famous monastic dance in the monasteries including exhibitions of invaluable Thankas and other Ritual Instruments of the monasteries. The tourists have the opportunities to see the entire traditional cultural programme of the region like Traditional Folk dance and songs of different parts of Ladakh. The grand achievements of the Ladakh Festival are noticeable of the significant increase in the arrivals of tourists during the lean tourist season of the year.',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article12->categories()->attach($category1);
        $article12->images()->attach([$img->id]);
        /*end article 12*/ 
        /*article 13*/
        $thumbnail = Document::create([
            'filename' => 'Thangka',
            'path' => 'img/articles/thangka.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Thangka',
            'path' => 'img/articles/thangka.jpg',
            'type' => 'banner'
        ]);
        $article14 = Article::create([
            'title' => 'Thangka',
            "author_id" => '1',
            'slug' => 'thangka',
            "must_to_do" => 0,
            'order' => 13,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => 'Thangka paintings are traditional practice of Buddhist art on cotton or silk with embellishment of different Buddhist deities or mandalas. Thangkas are generally kept rolled up when not on display as they are very delicate. Thangkas are used for different functions. It serves as important teaching tools depicting the life of the Buddha, various influential lamas and other deities and bodhisattvas. It is also used to describes historical events or retelling myths associated with other deities. The images on Thangka act as a medium through which one can offer prayers during a ritual. It is also used as a meditation tool to help one come down to the path of enlightenment. They are of different size and are displayed in monasteries for a brief period of time.',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article14->categories()->attach($category4);
        $article14->images()->attach([$img->id]);
        /*end article 14*/ 
        /*article 15*/   
       
        $thumbnail = Document::create([
            'filename' => 'Losar',
            'path' => 'img/articles/losar.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Losar',
            'path' => 'img/articles/losar.jpg',
            'type' => 'banner'
        ]);
        $article15 = Article::create([
            'title' => 'Losar',
            "author_id" => '1',
            'slug' => 'losar',
            "must_to_do" => 0,
            'order' => 14,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => 'Losar translates to “new year”. A tradition of celebrating the new year is common world over, and Ladakh is no different. The celebration in Ladakh cuts across all communities and spans the whole of the region. It instills in people a sense of shared cultural and social identity. Losar is a sweet reminder of the gifts that nature bestows on us.
            <br/><br/>
            Losar celebration in Leh town falls on the 15 th day of the tenth month of the Tibetan Lunar Calendar, which is usually in the month of December. In many of other parts of Ladakh Losar celebration sets off with Galdan Ngamchot on 25 th day to commemorate the birth and parinirvana of Gyalwa Tsongkhapa, the 14 th century Tibetan saint and founder of Gelugspa sect of Buddhism. It is on Namgang, the last day of the 10 th month when special rituals are performed in every household, with which begins the nine-day celebrations in almost all other parts of Ladakh and primarily among the Buddhist community.The celebrations are said to date back to the pre-Buddhist era of Ladakh, when religions such as Bon prevailed. At that time, Losar generally took place in the month of February. However, it is said that in the 17 th century King Jamyang Namgyal wanted to lead an expedition against Baltistan so he advanced the losar celebrations by two months, and ordered his forces to celebrate Losar before leaving. An expedition before the new year was considered inauspicious, and the King lost the war against
            <br/><br/>
            Baltistan. However, the practice of celebrating losar in the 10 th and 11 th months continued. Not everybody believes in this story. Few even go on to say that Ladakh has always been celebrating Losar in 11 th month, which is also termed as Go lzawa or the first month as per Tibetan calender.
            <br/><br/>
            The festivities unfold in the Leh town area. The streets are cleaned and decorated with prayer flags. The day starts with rituals of offerings to local deities. Maytsay or blazing fire torches are lit, and swung up and down in an exhilarating procession, a ritual that is believed to ward off evil spirits and omens. As the day advances, cultural events such as dance performances follow. These days the youth add a modern touch by organizing contemporary music and dance shows. A festive mood surrounds the region with people coming out in new clothes. They indulge in feasting on delicacies and enjoy the specially brewed chang (local alcoholic drink made from barley). Losar is an occasion to visit extended family and friends. People greet one another with delicacies and khatags (ceremonial scarf). Losar brings an atmosphere of amity and love. Christians and Muslims visit their Buddhist friends and relatives, who reciprocate such gestures during their religious festivals.',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article15->categories()->attach($category1);
        $article15->images()->attach([$img->id]);
        /*end article 15*/ 
        /*article 16*/
        $thumbnail = Document::create([
            'filename' => ' Sindhu darshan',
            'path' => 'img/articles/sindhudarshan.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Sindhu darshan',
            'path' => 'img/articles/sindhudarshan.jpg',
            'type' => 'banner'
        ]);
        $article16 = Article::create([
            'title' => 'Sindhu darshan',
            "author_id" => '1',
            'slug' => 'sindhu-darsha',
            "must_to_do" => 0,
            'order' => 15,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => 'Sindhu Darshan Festival is a festival held in Leh, Ladakh, India. The festival is held every year in June on the full moon day of Guru Purnima. On this day, devotees gather near the banks of the Indus River, which is known as the Sindhu River in India. Since 1997, the festival has stretched for three days, attracting large number of foreign and domestic tourists.
            <br/><br/>
            The Sindhu Darshan Festival is held as a celebration of the River Sindhu. The main reason behind the celebration of Sindhu Darshan Festival is to celebrate the Indus River, as the river is an important historical icon in India and has been worshiped since the times of Ancient India. The Bollywood film Dil Se was shot during the first Sindhu Darshan Festival.
            <br/><br/>
            Lal Krishna Advani and Tarun Vijay a veteran journalist re-discovered the Sindhu river flowing through Ladakh, when they visited Leh in January 1996. Vijay conceived the idea of a festival on its banks as the river is the source of identity for India as the names India, Indian, Hindu and Hindustan are derived from Indus and Sindhu. Since then, the festival has been attracting people from all walks of life, castes, religions and places specially becoming a pilgrimage for Sindhi Hindus, who in pre-partition days, used to worship the river in their homeland of Sindh, now in Pakistan. Lal Krishna Advani, in 1996, himself a Sindhi, visited Choglamsar (8 km from Leh) and started the Sindhu Darshan Abhiyan, with handful of other Sindhis.
            <br/><br/>
            The first time this event was held in the form of Sindhu Darshan Festival was in October, 1997.',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article16->categories()->attach($category1);
        $article16->images()->attach([$img->id]);
        /*end article 16*/ 
        /*article 17*/
        $thumbnail = Document::create([
            'filename' => ' Leh dosmoche',
            'path' => 'img/articles/lehdosmoche.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Leh dosmoche',
            'path' => 'img/articles/lehdosmoche.jpg',
            'type' => 'banner'
        ]);
        $article17 = Article::create([
            'title' => 'Leh dosmoche',
            "author_id" => '1',
            'slug' => 'leh-dosmoche',
            "must_to_do" => 0,
            'order' => 16,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => 'On a cold wintry day, usually in the month of February, rumblings of cymbals and horns, the rhythmic beating of the kettledrums and the piercing sound of the trumpet break the silence of Old Town Leh. This is how the annual Dosmoche festival in the courtyard of Leh Palace starts. As one descends from the Palace towards the bottom of the hill, Leh Bazaar stretches out in front of you, and this is where most cultural celebrations connected with Dosmoche take place.
            <br/><br/>
            It is believed that this annual event began as a ritualistic prayer for the recovery of an ailing king of Ladakh. It was held throughout Ladakh during the rule of the Namgyal dynasty but gradually, as democratic structures replaced the monarchy, the festival was no longer held throughout the region. Since then, this vibrant carnival of mask dances, music and a multitude of activities takes place in different spaces of Old Town, engaging and entertaining people from all walks of life. The residents of Old Town Leh have held on to this tradition, celebrating this symbolic festival without fail and with a great sense of responsibility. It is made possible through a system called Dosmoche Nyerpa, wherein each household takes turns in arranging for the festival.
            <br/><br/> 
            The event takes place on the third and fourth day of the 12 th month of Tibetan calendar that usually coincides with the month of February. It is held over two days, on the 28 th and 29 th Day of the 12 th month of the Tibetan Lunar calendar, usually falling in the month of February.
            <br/><br/>
            The procession of the principal figure or effigy called Dos (threadcross) is the highlight of the event. It is prepared by the monks of Takthok monastery with consecrated threads. The elaborate procession begins on the second day and culminates at a site on the outskirts of Old Town called Kadmoche. The final ritual at Kadmoche marks the eradication of evil and triumph of good, calling upon the gods for their blessings and protection for the approaching year. Participant attempt to grab the threads as it is believed they are auspicious and contain a protective power.',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article17->categories()->attach($category1);
        $article17->images()->attach([$img->id]);
        /*end article 17*/ 
        /*article 18*/
        $thumbnail = Document::create([
            'filename' => 'Monastic festivals',
            'path' => 'img/articles/monasticfestivals.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Monastic festivals',
            'path' => 'img/articles/monasticfestivals.jpg',
            'type' => 'banner'
        ]);
        $article18 = Article::create([
            'title' => 'Monastic festivals',
            "author_id" => '1',
            'slug' => 'monastic-festivals',
            "must_to_do" => 0,
            'order' => 17,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => 'Please click here on the link to see the Monastic Calendar. Link
            https://cdn.s3waas.gov.in/s3291597a100aadd814d197af4f4bab3a7/uploads/2018/08/2018081083.pdf
            <br/><br/>
            <h2>Hemis Festival</h2>
            It is one of the most famous monastic festival in June to commemorate the birth of guru padmasambhava. The three-day festival take place from 9 th to 11 th which comes in a cycle of 12 years.
            <br/><br/>
            <h2>Thiksey, Karsha and Spituk Gustor</h2>
            It takes place at Thiksey, Spituk and Karsha in different month of the year. The festival takes place for two days. The celebration is the mark of victory over evils.
            <br/><br/>
            <h2>Dosmochey</h2>
            It is celebrated in Leh (Leh Palace), Likir and Disket monasteries in February. The most famous among all is Leh Dosmochey, which is celebrated for two days. The festival take place in the end and starting of the Tibetan new year. The monks prepare the offerings with threads crosses which binds the evil, hungry ghosts and guard against the natural disaster in the coming year.
            <br/><br/>
            <h2>Matho Nagrang</h2>
            It is celebrated on the 15 th day of the 1 st month of Tibetan calendar year at Matho monastery. The festival is famous because of appearance of the two oracles during the festival after full month meditation in complete isolation.
            <br/><br/>
            <h2>Stok Guru Tsechu</h2>
            It is celebrated for two days with mask dances performed. It is also held in February around a week before the week before the matho nagrang. During the festival two oracle appears, but they are laymen from the same village prepared by monks to receive the spirits of the deities.
            <br/><br/>
            <h2>Phyang Tsedup</h2>
            It takes place in July/August. Like other monasteries monks perform mask dances. The huge thangka of Skyoba Giksten Gonbo is hung in the courtyard during festival.
            <br/><br/>
            <h2>Yuru Kabgyat</h2>
            The two-day festival take place in July in Lamayuru monastery, about 123 kms from Leh. Monks like other monastic festival perform mask dances. During the festival monks perform Prayer and rituals to get rid of disaster and to attain peace in the world.
            <br/><br/>
            <h2>Ladakh Festival</h2>
            It takes place in September from 1 st to 15 th every year in Leh and its surrounding villages. The inauguration ceremony takes place in Leh on a large scale with the procession of various cultural troupes from different parts of Ladakh.
            <br/><br/>
            <h2>Sindhu Darshan (Visit Indus) Festival</h2>
            It is a three-day festival held from 1 st to 3 rd June, in Shey Manla around 8kms from Leh on the bank of Indus river. For the first-time it was organised in 1997, as a symbol of unity and communal harmony and national integration.',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article18->categories()->attach($category1);
        $article18->images()->attach([$img->id]);
        /*end article 18*/ 
        /*article 19*/
        $thumbnail = Document::create([
            'filename' => 'Nubra Division',
            'path' => 'img/articles/nubradivision.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Nubra Division',
            'path' => 'img/articles/nubradivision.jpg',
            'type' => 'banner'
        ]);
        $article19 = Article::create([
            'title' => 'Nubra Division',
            "author_id" => '2',
            'slug' => 'nubra-division',
            "must_to_do" => 0,
            'order' => 18,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => 'Major attraction of Nubra is the highest motorable road Khardongla pass (18,380ft.) majestic peaks and glaciers enchanting valleys and villages. Diskit and Samstanling Gonpa, Panamik hot spring, double humped camel safari, river rafting, trekking and Sunbathe in the sand dunes at Hunder are also a great source of attraction for the touristsThis valley is popularly known as Ldumra or the valley of orchard/flowers. It is situated in the North of Ladakh, between Karakoram and Ladakh ranges of Himalayas. Nubra lies at average altitude about 10,000 feet above sea level. The climate, of the areas being soft, soil is much fertile and the vegetation of the area is comparatively thicker than those of the other areas of Ladakh. Shrubs, bushes and trees grow in abundance wherever there is any source of water. Due to this reason Nubra has acquired its right name- Ldumra. Shayok and Siachan rivers forms fairly large drain in Nubra. Nubra is a broad valley with lofty mountains on its all sides. Valley assumes greater attractions at the site where both the rivers meet. The formation of Central part of Nubra also takes place there. Diskit is the Sub-Division HQ. of Nubra. Diskit Gonpa is also situated at a height of about 200 mtrs. Above the village, on the spur of rocky mountain and at the most commanding point having clear view of the entire central part of Nubra. Samstanling Gonpa is situated on the North, facing Diskit Gonpa. This Gonpa is equally important and recreationally it assumes greater importance for being situated at a commanding scenic view point at the foot hills of Karakoram ranges up above Tegar and Sumoor villages, amidst plenty of water and high vegetation. Major village via Kardong, Khalsar, Tirit, Sumoor, Tegar Pinchemik, Tirisha and Panamik all fall along the traditional silk route. The caravans travelling Central Asia and Kashmir through Nubra valley used to stay at those villages. Panamik was the most important place for haltage of Caravan. It served as last major village where the Caravans landed the facility of feed back, before they negotiate Saseer and Karakoram passes towards Central Asia. The famous hot spring of Panamik also served them as a source for bath, drinking water and therapeutic purpose. Panamik has still got charms and potentiality to serve as a host to travellers. All areas around it including Iantsa Gonpa and Murgi waterfall across it combined with scenic view strengthens its beauty and hospitality.',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article19->categories()->attach($category3);
        $article19->images()->attach([$img->id]);
        /*end article 19*/ 
        /*article 20*/
        $thumbnail = Document::create([
            'filename' => 'Zanskar Valley',
            'path' => 'img/articles/zanskarvalley1.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Zanskar Valley',
            'path' => 'img/articles/zanskarvalley2.jpg',
            'type' => 'banner'
        ]);

        $article20 = Article::create([
            'title' => 'Zanskar Valley',
            "author_id" => '2',
            'slug' => 'zanskar-valley',
            "must_to_do" => 0,
            'order' => 19,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => 'Zanskar, Zahar (locally) or Zangskar, also known as Janskar or Jangskar, is a subdistrict or tehsil of the Kargil district, which lies in the Indian union territory of Ladakh. The administrative centre is Padum. Zanskar, together with the neighbouring region of Ladakh, was briefly a part of the kingdom of Guge in Western Tibet. Zanskar lies 250 km south of Kargil town on NH301.
            <br/><br/>
            The Zanskar Range is a mountain range in the union territory of Ladakh that separates Zanskar from Ladakh. Geologically, the Zanskar Range is part of the Tethys Himalaya, an approximately 100-km-wide synclinorium formed by strongly folded and imbricated, weakly metamorphosed sedimentary series. The average height of the Zanskar Range is about 6,000 m (19,700 ft). Its eastern part is known as Rupshu.The town had a population of 20,000 in 2020.
            <br/><br/>
            <strong>Religious sites:</strong>
            <br/><br/>
            Sani Gonpa:
            7kms before reaching Padum this castle like monastery which unlike other monasteries of Ladakh, is built on level ground. According to a legend its origin is associated with Kanishka ( Kushan ruler of 2nd century AD), on account of the Kanishka Stupa, which stands in the backyard of the walled complex.
            <br/><br/>
            Karsha Gompa:
            9 kms from Padum this is the largest monastic establishment in Zanskar. The complex of white washed structures are imposing and can be seen from Padum. This complex houses 150 monks, eight temples, two assembly halls, valuable icons, artifacts, scrolls and thankas. The monastery was founded during th 14th century.
            <br/><br/>
            Stongde Monastery:
            18 kms from Padum the monestry is perched atop a hillock overlooking the village. This monastery is associated with the famous Tibetan Yogi Marpa who is said to have founded it and is also known as Marpa Ling.
            <br/><br/>
            Burdan Monastery:
            12kms from Padum in the Lungnak valley is an isolated monastery perched atop a rock rising vertically from the river, The monastery holds prominent position among the Drogpa order monasteries of Zanskar. It was founded by Deba Gyatso during early 17th century. But it is famous as the seat of Lama Barapa.
            <br/><br/>
            Phugtal Gompa:
            This is one of the superb cave monastry of Zanskar and is picturesquely situated in Lungnak valley. It was founded by Phagspa Sherab Zangpo by 2nd half of the 11th century.
            <br/><br/>
            Zangkul Gompa:
            The meditation retreat of famous Indian yogi Naropa  (10th century AD) Zankul is situated in a side valley near Ating village and falls inroute  Padum  – Kishtiwar trek.
            <br/><br/>
            Muslim Khankas/Shrines
            Baroo Khanqah:
            5 kms from the heart of the Kargil town this Khanqah is very famous and popular in the whole Ladakh and people throng round the year to Baroo Khanqah. The Khanqah was built during the era of Hazrat Syed Muhammad Nur Bakhshi or Hazrat Mir Shams-ud-din Iraqi.
            <br/><br/>
            Karpokhar Shrine:
            About 5 kms from Sankoo the very popular pilgrim place of Karpokhar shrine of a muslim scholar Saint Syed Mir Hashim is situated.',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article20->categories()->attach($category3);
        $article20->images()->attach([$img->id]);
        /*end article 20*/ 
        /*article 21*/    
        $thumbnail = Document::create([
            'filename' => 'Pangong Lake',
            'path' => 'img/articles/pangonglake1.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Pangong Lake',
            'path' => 'img/articles/pangonglake2.jpg',
            'type' => 'banner'
        ]);
        $article21 = Article::create([
            'title' => 'Pangong Lake',
            "author_id" => '2',
            'slug' => 'pangong-lake',
            "must_to_do" => 0,
            'order' => 20,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => 'Pangong Tso or Pangong Lake is an endorheic lake spanning eastern Ladakh and West Tibet situated at an elevation of 4,225 m (13,862 ft). It is 134 km (83 mi) long and divided into five sublakes, called Pangong Tso, Tso Nyak, Rum Tso (twin lakes) and Nyak Tso. Approximately 50% of the length of the overall lake lies within Tibet, 40% in Ladakh and the rest is disputed but controlled by China.
            <br/><br/>
            Historically, the lake is viewed as being made up five sublakes, which are connected through narrow water channels. The name Pangong Tso only applied to the western most lake that is mostly in Ladakh. The main lake on the Tibetan side is called Tso Nyak (the “middle lake”). It is followed by two small lakes called Rum Tso. The last lake near Rutog is called Nyak Tso again.[5][6] The whole lake group was and is still often referred to as Tsomo Nganglha Ringpo in Tibetan.
            <br/><br/>
            There are different interpretations on the meanings of both Pangong Tso and Tsomo Nganglha Ringpo. The Ladakh government website indicates “Pangong Tso” is Tibetan meaning “high grassland lake”, however travel books from decades back say Pangong means “hollow”. Tsomo Nganglha Ringpo is Tibetan that is interpreted to mean various different but similar meanings — “long, narrow, enchanted lake” by Chinese media sources, “female narrow very long lake” by early European explorers, and “long-necked swan lake” by other modern sources. The lake has also been referred to as Pan-kung Hu.',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article21->categories()->attach($category3);
        $article21->images()->attach([$img->id]);
        /*end article 21*/ 
        /*article 22*/    
        $thumbnail = Document::create([
            'filename' => 'Nubra Valley',
            'path' => 'img/articles/nubravalley1.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Nubra Valley',
            'path' => 'img/articles/nubravalley2.jpg',
            'type' => 'banner'
        ]);
        $article22 = Article::create([
            'title' => 'Nubra Valley',
            "author_id" => '2',
            'slug' => 'nubra-valley',
            "must_to_do" => 1,
            'order' => 21,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => 'Major attraction of Nubra is the highest motorable road Khardongla pass (18,380ft.) majestic peaks and glaciers enchanting valleys and villages. Diskit and Samstanling Gonpa, Panamik hot spring, double humped camel safari, river rafting, trekking and Sunbathe in the sand dunes at Hunder are also a great source of attraction for the touristsThis valley is popularly known as Ldumra or the valley of orchard/flowers. It is situated in the North of Ladakh, between Karakoram and Ladakh ranges of Himalayas. Nubra lies at average altitude about 10,000 feet above sea level. The climate, of the areas being soft, soil is much fertile and the vegetation of the area is comparatively thicker than those of the other areas of Ladakh. Shrubs, bushes and trees grow in abundance wherever there is any source of water. Due to this reason Nubra has acquired its right name- Ldumra. Shayok and Siachan rivers forms fairly large drain in Nubra. Nubra is a broad valley with lofty mountains on its all sides. Valley assumes greater attractions at the site where both the rivers meet. The formation of Central part of Nubra also takes place there. Diskit is the Sub-Division HQ. of Nubra. Diskit Gonpa is also situated at a height of about 200 mtrs. Above the village, on the spur of rocky mountain and at the most commanding point having clear view of the entire central part of Nubra. Samstanling Gonpa is situated on the North, facing Diskit Gonpa. This Gonpa is equally important and recreationally it assumes greater importance for being situated at a commanding scenic view point at the foot hills of Karakoram ranges up above Tegar and Sumoor villages, amidst plenty of water and high vegetation. Major village via Kardong, Khalsar, Tirit, Sumoor, Tegar Pinchemik, Tirisha and Panamik all fall along the traditional silk route. The caravans travelling Central Asia and Kashmir through Nubra valley used to stay at those villages. Panamik was the most important place for haltage of Caravan. It served as last major village where the Caravans landed the facility of feed back, before they negotiate Saseer and Karakoram passes towards Central Asia. The famous hot spring of Panamik also served them as a source for bath, drinking water and therapeutic purpose. Panamik has still got charms and potentiality to serve as a host to travellers. All areas around it including Iantsa Gonpa and Murgi waterfall across it combined with scenic view strengthens its beauty and hospitality.',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article22->categories()->attach($category3);
        $article22->images()->attach([$img->id]);
        /*end article 22*/ 
        /*article 23*/ 
        $thumbnail = Document::create([
            'filename' => 'Drass',
            'path' => 'img/articles/drass1.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Drass',
            'path' => 'img/articles/drass2.jpg',
            'type' => 'banner'
        ]);
        $article23 = Article::create([
            'title' => 'Drass',
            "author_id" => '2',
            'slug' => 'drass',
            "must_to_do" => 0,
            'order' => 22,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => 'Dras (also spelt Drass. ISO transliteration: Drās), a tourist hub for its high altitude trekking routes and tourist sites, is a Hill Station in the Kargil district of the union territory of Ladakh in India. It is on the NH 1 (former name NH 1D before renumbering of all national highways) between Zoji La pass and Kargil town. It is often called “The Gateway to Ladakh”. The government’s official spelling of the town is Drass.
            <br/><br/> 
            Traditionally, Dras is known as Hem-babs means “snow land” with the word “Hem” meaning snow. The average temperature of Dras in winter is -20 degrees Celsius.
            <br/><br/> 
            Climate:
            Dras is the coldest place in India, experiencing an altitude-influenced mediterranean continental climate (Köppen climate classification Dsb). Winters are cold with average lows around −20 °C (−4 °F), and as low as −23 °C at the height of winter, which lasts from mid-October to mid-May. Summers start in June and go on up till early September, with average temperatures near 23 °C (74 °F) and little precipitation. Annual precipitation is almost entirely concentrated from December to May when Dras gets around 550 millimetres (21.7 in) water equivalent of snowfall.',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article23->categories()->attach($category3);
        $article23->images()->attach([$img->id]);
        /*end article 23*/ 
        /*article 24*/ 
        $thumbnail = Document::create([
            'filename' => 'Suru Valley',
            'path' => 'img/articles/suruvalley1.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Suru Valley',
            'path' => 'img/articles/suruvalley2.jpg',
            'type' => 'banner'
        ]);
        $article24 = Article::create([
            'title' => 'Suru Valley',
            "author_id" => '2',
            'slug' => 'suru-valley',
            "must_to_do" => 0,
            'order' => 23,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => 'The Suru Valley is a valley in Kargil District in the Union Territory of Ladakh in India. It is drained by the Suru River, a powerful tributary of the Indus River. The valley’s most significant town is Sankoo. Suru Valley is famous for its beauty. There are many picnic spots in Suru Valley such as Damsna, Parkachik, Sangra, Karpokhar, Khous, Thulus, Stakpa, Umba etc. Karpokhar Holy Shrine(Syed Mir Hashim), Khous Holy Shrine & Sanku Holy Shrine (Syed Haider ) are famous for prayer in Suru Valley. Horses, Yaks and other variety of animals can be found living in the valley. In winter Suru Valley experiences heavy snowfall and avalanches. The literacy rate of Suru Valley is very low as compared to other parts of Ladakh. Suru Valley is beautiful but still backward due to ignorance of govt & unavailability of infrastructure, power other things which supports for the development.
            <br/><br/>
            The Suru valley is inhabited by 25,000 by people of Dard and Tibetan descent. In Kargil, the lower Suru Valley (i.e. Sanku,TSG) and the upper Suru Valley (Suru or Panikhar), the majority of the population are followers of Shi’a Islam, having converted from Tibetan Buddhism in the 16th century under the direction of Thi-Namgyal.[citation needed] Beyond Parkachik the spectacularly beautiful valley is practically uninhabited other than a couple of tiny settlements (Yuldo and Julidok) that consist Rangdum. People here are socially and culturally part of neighbouring Buddhist Zanskar and support the 18th century Rangdum Monastery belonging to the Gelugpa sect of Tibetan Buddhism. About 25 km south of Rangdum Monastery, the 4,400 m (14,436 ft) Pensi La (pass) leads into Zanskar',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article24->categories()->attach($category3);
        $article24->images()->attach([$img->id]);
        /*end article 23*/ 
        /*article 24*/
        $thumbnail = Document::create([
            'filename' => 'Fairs and festivals',
            'path' => 'img/articles/ladakhfestival.jpg',
            'type' => 'thumbnail'
        ]);
        $banner = Document::create([
            'filename' => 'Fairs and festivals',
            'path' => 'img/articles/ladakhfestival.jpg',
            'type' => 'banner'
        ]);
        $article24 = Article::create([
            'title' => 'Fairs and festivals',
            "author_id" => '1',
            'slug' => 'fairs-and-festivals',
            "must_to_do" => 0,
            'order' => 24,
            "thumbnail_id" => $thumbnail->id,
            "banner_id" => $banner->id,
            'content' => 'The religious philosophy of Buddhism, however, profound and subtle doesn’t preclude an immense joie-de-vivre among its Ladakh adherents, and even solemn religious enactment’s are made the occasion for joyous celebration. Many of the festivals of the monasteries take place in winter, a relatively idle time for the majority of the people. They take the form of dance-dramas in the Gonpa courtyards. Lamas, robed in colourful garments and wearing often startlingly frightful mask, perform mimes representing various aspect of the religion such as the progress of the individual soul and its purification or the triumph of good over evil. Local people flock from far and near to these events, and the spiritual benefits they get are no doubt heightened by their enjoyment of the party atmosphere, with crowds of women and men, the opportunity to make new friendships and renew old ones, the general bustle and sense of occasion. The biggest and most famous of the monastic festivals, frequented by tourists and locals alike is that of Hemis, which falls in late June or the first half of July, and is dedicated to Padma Sambhava. Every 12 years, the Gonpa’s greatest treasure, a huge thangka, a religious icon embroidered on cloths ritually exhibited. The next unveiling is due to take place in AD 2016. Other monasteries which have summer festivals are: Lamayuru (early July), Phyang (Late July or early August), Tak-thok ( about ten days after Phyang) and Karsha in Zanskar (1 days after Phyang) Thiksay and Deskit around November. Like Hemis, the phyang festival too involves the exhibition of a gigantic Thangka, though here it is done every year. Spituk, Stok, Chemrey & Matho all have their festivals in winter, between November and March. Likir Festival and Leh Dosmochey normally falls around February. At the appointed time, offerings of storma, ritual figures molded out of dough, are brought out and ceremonially cast away into the desert, or burnt. These scapegoats believed to carry away with them the evil spirits of the year just passed and thus the town is cleaned and made ready to welcome the New Year. Losar the Ladakhi New year falls about the time of the winter solstice any time between 8th and 30th December. All Ladakhi Buddhist celebrate it by making offerings to the gods goddesses, both in the Gonpas and in their domestic shrines.',
            "posted_at" => $faker->dateTime(),
            'created_at'        => Carbon::now(),
            'updated_at'        => Carbon::now()
        ]);
        $article24->categories()->attach($category1);
        $article24->images()->attach([$img->id]);
        /*end article 24*/ 
    }
}
