级联电路的传递函数为 $H(s) = \dfrac{A_0^N}{(1 + s/\omega_p)^N}$，因此 $|H(j\omega)| = \dfrac{A_0^N}{[1 + (\omega/\omega_p)^2]^{N/2}}$。
- −3 dB 频率由 $|H(j\omega_{-3dB})| = A_0^N/\sqrt2$ 定义：$[1 + (\omega_{-3dB}/\omega_p)^2]^{N/2} = 2^{1/2}$。
- 两边取 $2/N$ 次幂：$1 + (\omega_{-3dB}/\omega_p)^2 = 2^{1/N}$，因此 $\omega_{-3dB} = \omega_p\sqrt{2^{1/N} - 1}$。
- 例：N = 1 时为 $\omega_p$；N = 2 时为 $0.644\,\omega_p$；N = 3 时为 $0.51\,\omega_p$；当 N 很大时，$\omega_{-3dB} \approx \omega_p\sqrt{\ln 2/N} \approx 0.83\,\omega_p/\sqrt N$。
