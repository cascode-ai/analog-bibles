# 详细步骤 - A035

电路是一个电阻分压器，但 $R_1$ 取决于它参与决定的输出电压，因此分压方程变成关于 $v_{out}$ 的二次方程。写出分压关系，代入与电压有关的 $R_1$，求解，再回代校核。

### 第 1 步 — 含电压相关 $R_1$ 的分压方程

输出端无负载时，

$$
v_{out}=v_{in}\frac{R_2}{R_1+R_2}\quad\Longleftrightarrow\quad v_{out}(R_1+R_2)=v_{in}R_2 .
$$

电压系数为 $K=20{,}000\ \mathrm{ppm/V}=0.02\ \mathrm{V^{-1}}$，故

$$
R_1=R_{nom}\left[1+0.02\ \mathrm{V^{-1}}\cdot\frac{2.5\ \mathrm V+v_{out}}{2}\right]=R_{nom}\left[1+0.01\ \mathrm{V^{-1}}(2.5\ \mathrm V+v_{out})\right].
$$

### 第 2 步 — 关于 $v_{out}$ 的二次方程

由于 $R_{nom}=R_2=10$ kΩ，两边同除以 10 kΩ（电压以伏特为单位）：

$$
v_{out}\left[1+0.01(2.5+v_{out})+1\right]=2.5
\quad\Rightarrow\quad
0.01\,v_{out}^2+2.025\,v_{out}-2.5=0 .
$$

取正根：

$$
v_{out}=\frac{-2.025+\sqrt{2.025^2+4(0.01)(2.5)}}{2(0.01)}=\frac{-2.025+\sqrt{4.2006}}{0.02}=1.2271\ \mathrm V .
$$

### 第 3 步 — 校核与解释

回代得

$$
R_1=10\ \mathrm{k\Omega}\left[1+0.01(2.5+1.2271)\right]=10.373\ \mathrm{k\Omega},\qquad
v_{out}=\frac{(2.5\ \mathrm V)(10\ \mathrm{k\Omega})}{10\ \mathrm{k\Omega}+10.373\ \mathrm{k\Omega}}=1.2271\ \mathrm V .
$$

理想分压器给出 1.25 V；n 阱电阻在约 1.86 V 的平均端电压下比标称值高 3.7 %，使输出降低约 23 mV。由于修正量很小，从 $v_{out}=1.25$ V 出发做一次不动点迭代就已得到 1.2270 V。
