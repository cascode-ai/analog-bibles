# 详细步骤 - A122

M2 是 n 沟道电流沉，栅极接 $V_{GG}$，源极接地，所以其栅源电压就是 $V_{GG}$。用 M2 自身的参数令其饱和电流为 100 µA，即可直接求出 $V_{GG}$；M1 则必须由 $v_{in}$ 的直流电平偏置，使其流过相同的电流。

### 第 1 步 — M2 的饱和电流

M2 饱和，偏置计算中忽略沟道长度调制，取 $V_{GS2}=V_{GG}$：

$$
I_D=\frac{K'_N}{2}\frac{W_2}{L_2}(V_{GG}-V_{TN})^2 ,
\qquad K'_N\frac{W_2}{L_2}=(110\ \mu\mathrm{A/V^2})(1)=110\ \mu\mathrm{A/V^2}.
$$

### 第 2 步 — 求解 $V_{GG}$

$$
V_{GG}-0.7\ \mathrm V=\sqrt{\frac{2(100\ \mu\mathrm A)}{110\ \mu\mathrm{A/V^2}}}=\sqrt{1.818\ \mathrm{V^2}}=1.348\ \mathrm V,
\qquad V_{GG}=2.048\ \mathrm V\approx2.05\ \mathrm V .
$$

只有 M2 的参数起作用：它的尺寸（1 µm/1 µm）以及 n 沟道的 $K'_N$ 和 $V_{TN}$。p 沟道的 M1 不决定 $V_{GG}$；只有当 $v_{in}$ 处于相应的直流电平时它才流过 100 µA，并且两管都必须保留足够的 $V_{DS}$ 以维持饱和（M2 需要 $V_{DS2}\ge1.348$ V）。
