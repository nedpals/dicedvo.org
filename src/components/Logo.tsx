const Logo = ({ variant }: {
    variant: 'light' | 'dark'
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={141}
    height={46}
    fill="none">
    <path
      fill="#FCC669"
      fillRule="evenodd"
      d="M46.477 11.5h-13.28L39.838 0l6.64 11.5Z"
      clipRule="evenodd"
    />
    <path
      fill="#2AA250"
      fillRule="evenodd"
      d="m39.837 23-6.64-11.5h13.28L39.837 23Z"
      clipRule="evenodd"
    />
    <path fill="#34CB64" d="M53.116 23H39.837l6.64-11.5 6.64 11.5Z" />
    <path
      fill="#F73B9C"
      fillRule="evenodd"
      d="M46.477 34.5h-13.28l6.64 11.5 6.64-11.5Z"
      clipRule="evenodd"
    />
    <path fill="#F96CB5" d="M33.198 34.5 26.558 46h13.28l-6.64-11.5Z" />
    <path
      fill="#74CDF1"
      fillRule="evenodd"
      d="m39.837 23-6.64 11.5h13.28L39.837 23Z"
      clipRule="evenodd"
    />
    <path fill="#46BCEC" d="M53.116 23H39.837l6.64 11.5 6.64-11.5Z" />
    <path fill="#FBB337" d="m26.558 0 6.64 11.5L39.838 0h-13.28Z" />
    <path fill="#F33" d="M26.558 0H13.28l6.64 11.5L26.559 0Z" />
    <path fill="#F66" d="M33.198 11.5 26.558 0l-6.64 11.5h13.28Z" />
    <path
      fill={variant === 'light' ? '#fff' : '#000'}
      d="M13.28 0H6.64v11.5L0 23l6.64 11.5v11.446h19.887l.031.054 6.64-11.5h-13.28L13.28 23l6.64-11.5L13.279 0ZM59.148 32.434v-18.59h8.445c2.018 0 3.798.39 5.338 1.168 1.54.761 2.745 1.833 3.612 3.214.868 1.38 1.301 3.018 1.301 4.913 0 1.877-.433 3.514-1.301 4.913-.868 1.381-2.072 2.461-3.612 3.24-1.54.762-3.32 1.142-5.338 1.142h-8.446Zm4.302-3.532h3.93c1.24 0 2.311-.23 3.214-.69a5.086 5.086 0 0 0 2.125-2.019c.513-.867.77-1.886.77-3.054 0-1.186-.257-2.204-.77-3.054a4.921 4.921 0 0 0-2.125-1.992c-.903-.478-1.974-.717-3.213-.717H63.45v11.526ZM83.48 32.434v-18.59h4.302v18.59h-4.303ZM103.481 32.753c-1.434 0-2.771-.23-4.01-.69a9.586 9.586 0 0 1-3.187-2.019 9.477 9.477 0 0 1-2.125-3.054c-.496-1.169-.744-2.452-.744-3.851s.248-2.683.744-3.851a9.476 9.476 0 0 1 2.125-3.054 9.535 9.535 0 0 1 3.213-1.992c1.222-.478 2.559-.717 4.01-.717 1.612 0 3.063.283 4.356.85a8.371 8.371 0 0 1 3.293 2.443l-2.762 2.55c-.637-.726-1.346-1.266-2.125-1.62a5.839 5.839 0 0 0-2.549-.558c-.868 0-1.664.141-2.39.425a5.42 5.42 0 0 0-1.886 1.222 5.747 5.747 0 0 0-1.248 1.885c-.284.726-.425 1.532-.425 2.417 0 .885.141 1.69.425 2.417a5.748 5.748 0 0 0 1.248 1.885 5.42 5.42 0 0 0 1.886 1.222c.726.283 1.522.425 2.39.425.921 0 1.77-.177 2.549-.531.779-.372 1.488-.93 2.125-1.673l2.762 2.55a8.609 8.609 0 0 1-3.293 2.47c-1.293.566-2.753.849-4.382.849ZM120.409 21.333h8.95v3.346h-8.95v-3.346Zm.319 7.649h10.118v3.452h-14.394v-18.59h14.049v3.452h-9.773v11.686ZM138.194 32.647a2.6 2.6 0 0 1-1.833-.717c-.495-.496-.743-1.125-.743-1.886 0-.761.248-1.372.743-1.832a2.6 2.6 0 0 1 1.833-.718c.726 0 1.337.24 1.832.718.496.46.744 1.07.744 1.832 0 .761-.248 1.39-.744 1.886-.495.478-1.106.717-1.832.717Z"
    />
  </svg>
)
export default Logo;
