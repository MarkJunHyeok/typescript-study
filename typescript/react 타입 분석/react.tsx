import React, {
    useState,
    useCallback,
    useRef,
    useEffect,
    FC,
    ReactNode,
    FormEvent,
    ChangeEvent
} from 'react';

interface P {
    name: string
    title: string
    children: ReactNode | undefined
}

const WordRelay: FC<P> = (props) => {
    const [word, setWord] = useState('제로초');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputEl = useRef<HTMLInputElement>(null);

    useEffect(() => {
        console.log('useEffect');
    }, [1, 2, 3, 4, 5]);

    const onSubmitForm = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = inputEl.current;
        if (word[word.length - 1] === value[0]) {
            setResult('딩동댕');
            setWord(value);
            setValue('');
            if (input) {
                input.focus();
            }
        } else {
            setResult('땡');
            setValue('');
            if (input) {
                input.focus();
            }
        }
    }, [word, value]);

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }, []);

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input
                    ref={inputEl}
                    value={value}
                    onChange={onChange}
                />
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    );
};

const parent = () => {
    return (
        <WordRelay name="네임" title="제목">
            <div>
                하이
            </div>
        </WordRelay>
    )
}
export default WordRelay;