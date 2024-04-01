import styled from "styled-components"
const ProgressContainer=styled.div`
    margin-top: 3rem;
`
const Fill=styled.div`
    background-color: #777;
 height: 10px;
 width: 100%;
`;
const Guage=styled.div`
background-color:skyblue;
height: 100%;
width: ${(pros)=>pros.percent};
transition: 0.4s;
`
;
export default function Progress({page,maxpage}){
    return (
        <ProgressContainer>
            <div>
                {page}/{maxpage};
            </div>
            <Fill>
                <Guage percent={(page/maxpage)*100}></Guage>
            </Fill>
        </ProgressContainer>
    )
}