type IconProps = { className?: string };

function PlatformBadge({ label, color, className = "h-8 w-8" }: IconProps & { label: string; color: string }) {
  const abbr = label.slice(0, 2).toUpperCase();
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="6" fill={color} />
      <text x="16" y="20" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">
        {abbr}
      </text>
    </svg>
  );
}

export const ECOMMERCE_PLATFORM_ICONS: Record<string, (p: IconProps) => JSX.Element> = {
  Shopify: (p) => <PlatformBadge label="Sh" color="#96bf48" {...p} />,
  WooCommerce: (p) => <PlatformBadge label="Wo" color="#7f54b3" {...p} />,
  Magento: (p) => <PlatformBadge label="Mg" color="#f26322" {...p} />,
  BigCommerce: (p) => <PlatformBadge label="BC" color="#34313f" {...p} />,
  Wix: (p) => <PlatformBadge label="Wx" color="#0c6efc" {...p} />,
  Squarespace: (p) => <PlatformBadge label="Sq" color="#000000" {...p} />,
  OpenCart: (p) => <PlatformBadge label="OC" color="#23a8e0" {...p} />,
  PrestaShop: (p) => <PlatformBadge label="PS" color="#df0067" {...p} />,
};
