import Container from 'components/atoms/Container/Container';
import UnderlinedText from 'components/atoms/UnderlinedText/UnderlinedText';
import groupColumnValues from 'utils/groupColumnValues';
import { ReactNode, ReactNodeArray } from 'react';

interface ContentProps {
  content: {
    paragraph: ReactNode;
    underline: {
      props: Object;
      target: string;
    }[];
  }[];
}

export default function Content({ content }: ContentProps) {
  return (
    <Container>
      {content.map(({ paragraph, underline }, index) => {
        const columns = groupColumnValues(underline);

        if (columns !== undefined && typeof paragraph === 'string') {
          if (columns.props && columns.target) {
            const targets = new RegExp(`(${columns.target.join('|')})`, 'g');
            paragraph = paragraph.split(targets) as ReactNode;

            for (const [index, value] of (paragraph as ReactNodeArray).entries()) {
              if (columns.target.includes(value)) {
                const iterationIndex = columns.target.indexOf(value);

                if (Array.isArray(paragraph)) {
                  paragraph[index] = (
                    <UnderlinedText key={iterationIndex} {...columns.props[iterationIndex]}>
                      {value as ReactNode}
                    </UnderlinedText>
                  );
                }
              }
            }
          }
        }

        return <p key={index}>{paragraph}</p>;
      })}
    </Container>
  );
}
