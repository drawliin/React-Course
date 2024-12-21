import React from 'react';
import {useRef} from 'react';

function Ref() {

    const lastPara = useRef();

    const moveDown = () => {
        lastPara.current.scrollIntoView({
            behavior: "smooth"
        });
    };

  return (
    <>
        <h1>Go To Paragraph</h1>

        <button onClick={moveDown}>Move to the last Para</button>

        <div className='goToPara'>
            <section>
                <img src='https://picsum.photos/id/66/200'></img>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laboriosam repellat sunt corporis quasi quae alias vel in pariatur consequatur! Dignissimos at cum repellendus illum, veniam quidem quas in dolorem.
                </p>
            </section>

            <section>
                <img src='https://picsum.photos/id/120/200'></img>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laboriosam repellat sunt corporis quasi quae alias vel in pariatur consequatur! Dignissimos at cum repellendus illum, veniam quidem quas in dolorem.
                </p>
            </section>

            <section>
                <img src='https://picsum.photos/id/350/200'></img>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laboriosam repellat sunt corporis quasi quae alias vel in pariatur consequatur! Dignissimos at cum repellendus illum, veniam quidem quas in dolorem.
                </p>
            </section>

            <section>
                <img src='https://picsum.photos/id/1/200'></img>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laboriosam repellat sunt corporis quasi quae alias vel in pariatur consequatur! Dignissimos at cum repellendus illum, veniam quidem quas in dolorem.
                </p>
            </section>

            <section>
                <img src='https://picsum.photos/id/648/200'></img>
                <p ref={lastPara}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laboriosam repellat sunt corporis quasi quae alias vel in pariatur consequatur! Dignissimos at cum repellendus illum, veniam quidem quas in dolorem.
                </p>
            </section>
        </div>
    </>
  );
}

export default Ref;