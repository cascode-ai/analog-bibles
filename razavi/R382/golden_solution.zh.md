$$\overline{V_{n,out,tot}^2} = A_0^2\,kTR_S\,\omega_0\quad(\mathrm{V^2}),\qquad V_{n,out,rms} = A_0\sqrt{kTR_S\omega_0}$$

- 放大器没有输入电流，因此 $R_S$ 的噪声电压全部出现在放大器输入端：$S_{out}(f) = \dfrac{4kTR_SA_0^2}{1 + (2\pi f/\omega_0)^2}$。
- $\displaystyle\int_0^\infty \frac{df}{1 + (2\pi f/\omega_0)^2} = \frac{\omega_0}{2\pi}\cdot\frac{\pi}{2} = \frac{\omega_0}{4}$，对应的噪声带宽（noise bandwidth）为 $\pi f_0/2$，其中 $f_0 = \omega_0/2\pi$。
- 总噪声：$4kTR_SA_0^2\cdot\omega_0/4 = A_0^2kTR_S\omega_0$（等价地写作 $2\pi A_0^2kTR_Sf_0$，其中 $f_0 = \omega_0/2\pi$）。
