# 详细步骤 - G337

由集电极电流的指数律推导该差分对的大信号传输特性，对其求导得到增量斜率，再求斜率降到原点处数值 99% 时的输入电压。

### 第 1 步 — 大信号传输特性

在正向放大区（forward-active region），每个集电极电流满足 $I_c = I_S\exp(V_{BE}/V_T)$。两管相同，因此两电流之比只取决于基射电压之差，即差分输入 $V_{id}=V_{BE1}-V_{BE2}$：

$$
\frac{I_{c1}}{I_{c2}}=\exp\!\left(\frac{V_{id}}{V_T}\right).
$$

忽略基极电流，在公共发射极处由 KCL 得 $I_{c1}+I_{c2}=I_{EE}$。联立两式解得

$$
I_{c1}=\frac{I_{EE}}{1+e^{-V_{id}/V_T}},\qquad
I_{c2}=\frac{I_{EE}}{1+e^{V_{id}/V_T}},\qquad
\Delta I_c=I_{c1}-I_{c2}=I_{EE}\tanh\!\left(\frac{V_{id}}{2V_T}\right).
$$

### 第 2 步 — 传输曲线的斜率

所求斜率是导数（即差分对的增量跨导），而不是比值 $\Delta I_c/V_{id}$。令 $x=V_{id}/2V_T$，并利用 $d\tanh x/dx=\mathrm{sech}^2x$：

$$
\frac{d\Delta I_c}{dV_{id}}=\frac{I_{EE}}{2V_T}\,\mathrm{sech}^2\!\left(\frac{V_{id}}{2V_T}\right).
$$

由于 $\mathrm{sech}^2 x\le 1$，且仅在 $x=0$ 时取等号，斜率在原点处最大，为 $I_{EE}/2V_T$，并向两侧对称减小。因此相差 1% 意味着斜率降到原点值的 0.99：

$$
\mathrm{sech}^2 x=0.99 .
$$

### 第 3 步 — 求输入电压

精确求解该条件：

$$
\cosh x=\frac{1}{\sqrt{0.99}}=1.005038,\qquad
x=\cosh^{-1}(1.005038)=0.10034 .
$$

当 $x$ 较小时，$\mathrm{sech}^2x\approx1-x^2$，由此得 $x^2=0.01$、$x=0.1$；与精确值仅差 0.3%，结果得到验证。换算回电压：

$$
|V_{id}|=2V_T\,x=2(0.10034)\,V_T=0.2007\,V_T=0.2007\,(26\ \mathrm{mV})=5.22\ \mathrm{mV}.
$$

因此，差分输入的幅值须小于约 $0.20\,V_T\approx5.2$ mV，小信号斜率 $I_{EE}/2V_T$ 才能在 1% 以内成立。传输特性是对称的，正负 $V_{id}$ 对应相同的幅值。
