export type BannerData = {
  message: string;
  state: 'success' | 'error';
};

const Banner = ({ banner: { message, state } }: { banner: BannerData }) => {
  const isSuccess = state === 'success';
  const icon = isSuccess ? '성공' : '실패';
  return (
    <p className={`p-2 ${isSuccess ? 'bg-green-300' : 'bg-red-300'} rounded-xl w-full text-center`}>
      {`${icon} ${message}`}
    </p>
  );
};

export default Banner;
