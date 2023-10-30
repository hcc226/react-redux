import React from "react";

enum POLL_STATUS {
    RAW,
    SUBMITTED
}

type Option = {
    text: string;
    order: number;
    voteNumber: number;
}

type PollWidgetProps = {
    options: Option[];
    question: string;
    // status: POLL_STATUS;
    readonly: boolean;
    onVote: () => void;
    renderItem: (data: Option) => React.ReactNode
}

export default class PollWidget extends React.Component<PollWidgetProps> {
    handleVote = () => {

    }
    render(): React.ReactNode {
        const { question, options, renderItem } = this.props;
        return (
            <>
                <h2>{question}</h2>
                
                {options.map(item => (
                    renderItem(item)
                ))}
                
                <button onClick={this.handleVote}>submit</button>
            </>
        )
    }
}