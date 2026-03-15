import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner (){
    return(
        <div className={styles.banner}>
            <Image src={'/img/cover.jpg'} 
            alt='cover' 
            fill={true}
            objectFit ='cover'/>
            <div className={styles.bannerText}>
                <h1 className='text-4xl'>where every event finds its venue</h1>
                <h3 className='text-xl'>you can't take care pet if you can't talk to us</h3>
            </div>
        </div>
    )
}