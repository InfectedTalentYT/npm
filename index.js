
module.exports.alpaca = options => {

    if (options == 'image') {

        const images = ["https://upload.wikimedia.org/wikipedia/commons/d/db/Alpaca_%2831562329701%29.jpg",
            "https://cdn.britannica.com/64/158064-050-1524E1FF/Alpacas.jpg",
            "https://cdn.vanderbilt.edu/vu-news/files/20190808112649/GettyImages-1084222130.jpg",
            "https://bellepaga.com/img/cms/Alpaga/Alpaga%20mignon-2.jpg",
            "https://cdn.mos.cms.futurecdn.net/uYeF7LtJe5tnqRzm32AmhU.jpg",
            "https://pims.purinamills.com/BusinessLink/media/Mazuri/2020_AN_Mazuri_Alpaca-Article_480x480_032020.png?ext=.png",
            "https://www.treehugger.com/thmb/QoQlfxJFNApd4ISWx7BAqOBHFYs=/2121x1193/smart/filters:no_upscale()/alpaca-mother-and-cria-01-2a6d1c52547243ef962c44a9aae2367a.jpg",
            "https://i.pinimg.com/originals/a5/6c/de/a56cde6a87be72c380b228f85751620e.jpg",
            "https://www.nambuccaguardian.com.au/images/transform/v1/crop/frm/32UQzXcwHuv6EtT6StXJwQK/21ea5e3e-f7ec-4743-8c0c-207a4ff0c52d.jpg/r0_274_5400_3325_w1200_h678_fmax.jpg",
            "https://www.openherd.com/userPhotos/Large/2020_637244950657859378.jpg",
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1141035-media_library/original/3b85d598-5cdb-4ed5-9b6e-353fd6574e0a.jpeg?im_w=720",
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/09/04/16/alpaca.jpg",
            "https://gdb.voanews.com/F37F2CE8-9FD9-4D15-A50F-523F3548865F_cx0_cy7_cw0_w1080_h608_s.jpg",
            "https://cdn11.bigcommerce.com/s-48655/images/stencil/original/uploaded_images/istock-000042041464-large.jpg?t=1573748504",
            "https://nationalzoo.si.edu/sites/default/files/styles/480x240_scale_and_crop/public/animals/alpacas-sheered-01.jpg?itok=PH3sWvTZ&timestamp=1520538731",
            "https://www.cottoncreekfarms.com/wp-content/uploads/2019/07/Adele-With-Full-Cria-Coat-1024x768.jpg",
            "https://images.squarespace-cdn.com/content/v1/58b52f46ff7c50fb6b0c7fcb/1531825377549-GBD5ON8ZGDT33M6E94FZ/ke17ZwdGBToddI8pDm48kIJbBg_tG5r-qr293PTgPql7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdGX1uUwZXdT_Ssj2nLL-YsfvOQ_yK9_mbRmb_-nYPJLloH3pPgIU7hPxOLjf-CIdw/baby-alpaca-wool",
            "https://cdn.britannica.com/60/188560-050-DF1A860A/Alpacas.jpg",
            "https://thumbs-prod.si-cdn.com/8ngUd8Zs3ERUYFWp49GnBohd9I0=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/b6/91/b6919210-a66e-4da6-bfb1-86903cf1eff2/800px-alpaca_2.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1gPvMCGF8Lg00UPkZbgECbLN6858iPaBoA&usqp=CAU",
            "https://bloximages.newyork1.vip.townnews.com/coastalview.com/content/tncms/assets/v3/editorial/6/ef/6eff4bfc-91ea-11e9-8d14-33c569d56e66/5d09187036b78.image.jpg?resize=1200%2C800",
            "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/08/08/50823.jpg",
            "https://sourcingjournal.com/wp-content/uploads/2020/06/alpacapeta.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf-e1d5Aye9QlPOFQB3WbVDcNEPsklsEz-lg&usqp=CAU"]

            return(images[Math.floor(Math.random() * images.length)])

    } else if (options == 'fact') {

        const facts = ["Alpaca fiber is considered the second strongest natural animal fiber.",
            "Alpaca females are pregnant for 242-345 days.",
            "Baby alpacas can weigh up to 20 pounds at birth.",
            "Baby alpacas are called cria.",
            "Alpacas are usually three feet at shoulder height when full grown. They reach four to seven feet in length.",
            "Baby alpacas can weigh up to 20 pounds at birth.",
            "When male alpacas are fighting they make a bird-like cry which is meant to scare the other alpacas.",
            "Alpacas are found in a variety of different colors including brown, black, white, and many combinations of these.",
            "When Alpacas spit a lot they develop 'sour mouth' which results in a gaping and drooping lower lip from the acid in the stomach bile.",
            "Alpacas are known to be friendly with people, including children.",
            "Alpacas are usually three feet at shoulder height when full grown.",
            "Alpacas do not each as much food as most other animals their size.",
            "On average an alpaca consumes two pounds of hay each day.",
            "An alpaca that wishes to exhibit friendly behavior will make a clucking or clicking noise.",
            "If an alpaca and a llama are crossbred, the offspring are referred to as huarizo.",
            "Because alpacas are smaller than many other animals raised for meat, it only takes an acre of productive pasture to sustain as many as eight animals.",
            "An alpaca that is in danger will make a shrieking, high-pitch, whining sound.",
            "Alpacas are considered to be intelligent animals.",
            "Alpacas are herbivores with a three-chambered stomach.",
            "The diet of an alpaca includes mostly grass, but they are also known to eat wood, bark, leaves and stems.",
            "Alpacas are native to Chile, Bolivia, and Peru, high in the Andes mountains of South America.",
            "Alpacas can live as long as 25 years and are able to survive in most climates.",
            "There are no wild alpacas.",
            "Alpacas are domesticated versions of vicuñas.",
            "Alpacas are related to llamas, which are domesticated versions of another wild Andean ruminant, the guanaco.",
            "Some Andean people eat alpaca meat. In Peru, it is often served in upscale restaurants.",
            "Alpacas don't have teeth in the top-front of their mouths. This gives them the appearance of having an underbite.",
            "Alpaca fur is a very prized fiber for artisans and crafters. Alpaca fur is very soft and does not retain water. It is also very durable."]

        return (facts[Math.floor(Math.random() * facts.length)])

    } else {

        throw new Error('Options have to be "image" or "fact"')

    }

}
