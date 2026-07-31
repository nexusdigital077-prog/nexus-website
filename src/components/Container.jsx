export default function Container({ as: Tag = 'div', className = '', children }) {
  return <Tag className={`mx-auto max-w-[1180px] px-6 ${className}`}>{children}</Tag>;
}
