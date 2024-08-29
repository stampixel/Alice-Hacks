import {TypeAnimation} from 'react-type-animation';

export default function Typing() {
    return (
        <TypeAnimation
            sequence={[
                'Wonder',
                1000,
                'Creativity',
                1000,
                'Collaboration',
                1000,
                () => {
                    console.log('Sequence completed');
                },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            // style={{fontSize: '2em', display: 'inline-block'}}
        />
    );
}