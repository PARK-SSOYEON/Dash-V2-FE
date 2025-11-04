import * as React from 'react';
import "./index.css";
import {Button, Input} from "@dash/ui";

function App() {
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState<string | undefined>();

    const submit = () => {
        if (!value.trim()) {
            // 에러 플래그 던지기
            setError("필수 입력값이에요");
        }
    };

    return (
        <div className="flex w-full flex-col">
            <Button
                mode="mono"
                size="md"
                icon={"identify"}
            > 테스트용 </Button>
            <Button
                mode="color_fill"
                size="md"
                icon={"identify"}
            > 테스트용 </Button>
            <div className="flex flex-row items-center">
                <Button
                    mode="color_line"
                    size="md"
                    icon={"identify"}
                > 테스트용 </Button>

                <Input
                    label="이름"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    errorMessage={error}
                />
            </div>

            <Button
                mode="color_line"
                size="sm"
                icon={"leftArrow"}
            />
            <Button
                mode="mono"
                size="sm"
                icon={"rightArrow"}
            />
            <Input label="입력제목" defaultValue="대충 입력값..."/>
            <Input label="입력제목"/>
            <button onClick={submit}>제출</button>

        </div>
    );
}

export default App
