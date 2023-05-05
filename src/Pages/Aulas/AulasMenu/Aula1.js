import "../Aulas.css";
import { useState } from "react";

export default function Aula1() {
  const [showElement, setShowElement] = useState(false);
  const showOrHide = () => setShowElement(true);
  return (
    <>
      <div className="centerContent">
        <div className="textJustify">
          <h2>Verbo To Be</h2>
          <p className="mg-top textFont">
            O Verbo “To Be” pode ser traduzido como ser ou estar, a diferença
            dessas duas traduções pode ser notada pelo contexto em que são
            usadas. Ele pode ser conjugado de três formas, no presente do
            indicativo, aparecendo nas formas “am”, “is” ou “are”, após o
            sujeito, em sua forma afirmativa. Segue-se a seguinte conjugação:
          </p>

          <ul className="mg-top textFont">
            <b>I am (pode ser contraído para I’m)</b>
            <li className="mg-bottom">
              Primeira pessoa do singular, possíveis traduções: Eu sou, Eu
              estou.
            </li>
            <iframe src="https://www.youtube.com/embed/fJ9rUzIMcZQ?start=24"></iframe>
            <p>
              I’m (ser) - Tempo: 0:27 | I'm just a poor boy (sou apenas um
              menino pobre)
            </p>
            <br />
            <b>You are (pode ser contraído para You’re)</b>
            <li className="mg-bottom">
              Segunda pessoa do singular ou plural, depende do contexto,
              possíveis traduções: Tu és, Tu estás. Você é, Você está, Vós sois,
              Vós estais, Vocês são, Vocês estão.
            </li>
            <b>He is (pode ser contraído para He’s)</b>
            <li className="mg-bottom">
              Terceira pessoa do singular, usado para se referir a um sujeito
              masculino, possíveis traduções: Ele é, Ele está.
            </li>
            <b>She is (pode ser contraído para She’s)</b>
            <li className="mg-bottom">
              Terceira pessoa do singular, usado para se referir a um sujeito
              feminino, possíveis traduções: Ela é, Ela está.
            </li>
            <iframe src="https://www.youtube.com/embed/LH4Y1ZUUx2g?start=39" title="YouTube video player"></iframe>{" "}
            <p>
              She’s (estar) - Tempo: 0:41 | I realize she’s right there (Eu
              percebo que ela está bem ali)
            </p>
            <br />
            <b>It is (pode ser contraído para It’s)</b>
            <li className="mg-bottom">
              Terceira pessoa do singular, usado para se referir a animais e
              objetos, possíveis traduções: Ele é, Ele está, Ela é, Ela está.
            </li>
            <b>We are (pode ser contraído para We’re)</b>
            <li className="mg-bottom">
              Primeira pessoa do plural, possíveis traduções: Nós somos, Nós
              estamos
            </li>
            <b>They are (pode ser contraído para They’re)</b>
            <li className="mg-bottom">
              Terceira pessoa do plural, possíveis traduções: Eles são, eles
              estão, Elas são, Elas estão.
            </li>
          </ul>

          <p className="mg-top textFont">
            Em sua forma negativa, basta adicionar a partícula “not”, que
            significa “não”, após o verbo conjugado, que está obrigatoriamente
            após o sujeito. Atenção: as formas “are not” e “is not” podem ser
            contraídas para “aren’t” e “isn’t”.
          </p>
          <iframe src="https://www.youtube.com/embed/hLQl3WQQoQ0?start=66" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
          <p>It isn’t - Tempo: 1:08 | It isn't over (Não acabou)</p>
          <br />
          <p>
            Em sua forma interrogativa, o verbo conjugado deve obrigatoriamente
            trocar de lugar com o sujeito, para que, dessa forma, ele venha
            antes do sujeito ao invés de após, como nos casos anteriores.
          </p>
          <iframe src="https://www.youtube.com/embed/w-HfMiue7-k?start=35" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
          <p>
            Am I - Tempo: 0:37 | Am I pretty, am I fun, boy? ( Eu sou bonita, eu
            sou divertida, garoto?)
          </p>
        </div>
        <div className="textJustify textFont">
          <h2>Exercício</h2>
          <ul className="mg-top">
            1)I _____ Brazilian and I live in Curitiba.
            <li>is</li>
            <li>am</li>
            <li className="mg-bottom">are</li>
            2) _____ you talking to me?
            <li>Are</li>
            <li>Is</li>
            <li className="mg-bottom">Am</li>
            3) What _____ Sheila doing?
            <li>are</li>
            <li>is</li>
            <li className="mg-bottom">am</li>
            4) My dog _____ playing in the garden.
            <li>are</li>
            <li>am</li>
            <li className="mg-bottom">is</li>
            5) The doors _____ closed.
            <li>is</li>
            <li>are</li>
            <li className="mg-bottom">am</li>
          </ul>

          <div className="login-form centerContent">
            <button onClick={showOrHide} className="buttonPlanos ">
              Gabarito
            </button>
            {showElement ? <p>am, Are, is, is, are</p> : null}
          </div>
        </div>
      </div>
    </>
  );
}
