type CommonCommentCardProps = {
  author: string;
  date: string;
  message: string;
};

export default function CommonCommentCard({ author, date, message }: CommonCommentCardProps) {
  return (
    <li className="rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-[0_25px_60px_-55px_rgba(15,23,42,0.25)]">
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span className="font-semibold text-sm text-slate-700">{author}</span>
        <span>{date}</span>
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{message}</p>
    </li>
  );
}


