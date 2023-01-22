import style from './About.module.scss';
import tema from 'styles/Tema.module.scss';
import house from 'assets/about/casa.png';
import pastas1 from 'assets/about/massa1.png';
import pastas2 from 'assets/about/massa2.png';

const images = [pastas1, pastas2];

export function About() {
	return (
		<section>
			<h1 className={tema['title']}>About</h1>
			<div className={style['weAbout']}>
				<img src={house} alt='House naBroca' className={style['weAbout__img']} />
				<div className={style['weAbout__text']}>
					<p>
                        Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
					</p>
					<p>
                        Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
					</p>
					<p>
                        Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
					</p>
				</div>
			</div>
			<div className={style['images']}>
				{images.map((img, id) => (
					<div key={id} className={style['images__image']}>
						<img src={img} alt='Image Pastas' />
					</div>
				))}
			</div>
		</section>
	);
}