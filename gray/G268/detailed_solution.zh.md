# 详细步骤 - G268

发射极电阻 $R_E$ 流过输出电流，其上产生的电压在基射回路中与输入相减：这是电流串联（局部）反馈。把晶体管（连同输入回路中的 $r_b$ 和 $R_E$ 的负载效应）看作基本跨导放大器 $a$，取 $f=R_E$，应用 $A=a/(1+T)$；阻抗乘以 $1+T$。每个结果都用直接的混合 π 计算加以验证。

### 第 1 步 — 小信号参数

$$
g_m=\frac{I_C}{V_T}=38.46\ \mathrm{mA/V},\qquad r_\pi=\frac{\beta}{g_m}=3.9\ \mathrm{k\Omega},\qquad r_o=\frac{V_A}{I_C}=80\ \mathrm{k\Omega}.
$$

### 第 2 步 — 基本放大器、反馈系数与环路传输

反馈网络只有 $R_E$：$z_{12f}=z_{11f}=z_{22f}=R_E$。基本放大器的输入回路包含 $r_b$、$r_\pi$ 和负载 $R_E$，因此控制电压为 $v_\pi=v_s\,r_\pi/(r_b+r_\pi+R_E)$；集电极接交流地且忽略 $r_o$ 时，

$$
a=\frac{g_m}{1+(r_b+R_E)/r_\pi}=\frac{38.46\ \mathrm{mA/V}}{1+400/3900}=34.9\ \mathrm{mA/V},\qquad f=R_E=200\ \Omega,
$$

$$
T=af=(34.9\ \mathrm{mA/V})(200\ \Omega)=6.98 .
$$

（忽略 $(r_b+R_E)/r_\pi$ 项则得到常见的 $g_mR_E=7.7$。）

### 第 3 步 — 跨导

$$
\frac{i_o}{v_s}=\frac{a}{1+T}=\frac{34.9\ \mathrm{mA/V}}{7.98}=4.37\ \mathrm{mA/V}.
$$

直接计算：由 $v_s=i_b(r_b+r_\pi)+(\beta+1)i_bR_E$ 和 $i_o=\beta i_b$ 得 $i_o/v_s=\beta/[r_b+r_\pi+(\beta+1)R_E]=150/34.3\ \mathrm{k\Omega}=4.37$ mA/V，即 $1/(229\ \Omega)$，接近理想值 $1/R_E$。

### 第 4 步 — 输入阻抗

串联求和使计入负载的输入电阻 $r_b+r_\pi+R_E=4.3\ \mathrm{k\Omega}$ 乘以 $1+T$：

$$
R_{in}=(1+T)(r_b+r_\pi+R_E)=(7.98)(4.3\ \mathrm{k\Omega})=34.3\ \mathrm{k\Omega},
$$

与直接结果 $r_b+r_\pi+(\beta+1)R_E=34.3\ \mathrm{k\Omega}$ 相同。

### 第 5 步 — 输出阻抗

串联采样使基本放大器的集电极电阻 $r_o$ 乘以 $1+T$：

$$
R_{out}\approx r_o\left(1+\frac{g_mR_E}{1+(r_b+R_E)/r_\pi}\right)=(80\ \mathrm{k\Omega})(7.98)=638\ \mathrm{k\Omega}\approx0.64\ \mathrm{M\Omega}.
$$

计入 $r_o$ 的完整节点分析同样给出 0.64 MΩ。这里 $T$ 较小，基极电流决定的上限 $(\beta+1)r_o=12$ MΩ 不构成限制。
