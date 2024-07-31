import styled from "styled-components";
import { flexMixin, fontMixin } from "../style/style";
import { tag_color, gray } from "../style/style";

// .content-container
const StyledContent = styled.div`
  ${flexMixin({ direction: "column", align: "flex-start", gap: 5 })}
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
  }
  span {
    ${fontMixin({ size: 12 })}
    color: ${tag_color};
    border: 1px solid ${tag_color};
    padding: 4px 5px;
    border-radius: 3px;
  }
  div {
    ${fontMixin({ size: 18, weight: 600 })}
  }
  p {
    ${fontMixin({ size: 12 })}
    color: ${gray};
  }
`;

export default function Content({ content }) {
  return (
    <StyledContent>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </StyledContent>
  );
}
