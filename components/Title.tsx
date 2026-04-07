interface IProps {
  title1?: string;
  title2?: string;
  titleStyles?: string;
  title1Styles?: string;
  paraStyles?: string;
  para?: string;
}

const Title = (props: IProps) => {
  const { title1, title2, titleStyles, title1Styles, paraStyles, para } = props;
  return (
    <div>
      <div className={`${titleStyles}`}>
        <h3 className={`${title1Styles} h3`}>
          {title1}{" "}
          <span className="text-destructive font-light! underline">
            {title2}
          </span>
        </h3>
        <p className={`${paraStyles} max-w-md`}>
          {para
            ? para
            : "Explore our latest collection of fashion essentials, where style meets comfort. From trendy tops to versatile bottoms, find your perfect look for any occasion."}
        </p>
      </div>
    </div>
  );
};

export default Title;
