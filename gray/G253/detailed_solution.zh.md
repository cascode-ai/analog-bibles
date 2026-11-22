# 详细步骤 - G253

10 kΩ 电阻 $R_F$ 对输出电压采样，并把电流送回输入节点，因此这是电压并联（跨阻）反馈。用 $y$ 参数表示 $R_F$：$y_{12f}$ 给出反馈系数，$y_{11f}$、$y_{22f}$ 相当于在基本放大器的输入端和输出端各接一个对地的 $R_F$ 作为负载。三个反相级使前向通路总体反相，因此是负反馈。

### 第 1 步 — 器件参数

饱和区中 $g_m=\sqrt{2k'(W/L)I_D}$，$r_o=1/(\lambda I_D)$：

$$
g_m=\sqrt{2\left(60\ \mu\mathrm{A/V^2}\right)(100)(1\ \mathrm{mA})}=3.464\ \mathrm{mA/V},\qquad r_o=\frac{50\ \mathrm V}{1\ \mathrm{mA}}=50\ \mathrm{k\Omega}.
$$

### 第 2 步 — 反馈网络与计入负载的基本放大器

对串联电阻 $R_F$，$y_{11f}=y_{22f}=1/R_F$，$y_{12f}=-1/R_F$，故

$$
f=y_{12f}=-\frac1{R_F}=-10^{-4}\ \mathrm S .
$$

在输入端，理想电流源只看到对地的 $R_F$（栅极不取电流），因此输入电流产生 $v_{g1}=i\,R_F$。每一级都是共源放大器，增益为 $-g_m$ 乘以其总漏极电阻：

| 级 | 漏极负载 | 负载 (Ω) | 增益 |
|---|---|---|---|
| $M_1$、$M_2$ | $5\ \mathrm{k\Omega}\parallel r_o$ | 4545 | −15.75 |
| $M_3$ | $5\ \mathrm{k\Omega}\parallel r_o\parallel R_F$ | 3125 | −10.83 |

例如，$-g_m(4545\ \Omega)=-(3.464\ \mathrm{mA/V})(4545\ \Omega)=-15.75$。开环跨阻为

$$
a=\frac{v_o}{i}=R_F\,(-15.75)^2(-10.83)=(10\ \mathrm{k\Omega})(-2684)=-26.84\ \mathrm{M\Omega}.
$$

### 第 3 步 — 环路增益与闭环跨阻

$$
T=af=(-26.84\ \mathrm{M\Omega})(-10^{-4}\ \mathrm S)=2684 .
$$

$$
\frac{v_o}{i_i}=\frac{a}{1+T}=\frac{-26.84\ \mathrm{M\Omega}}{2685}=-9996\ \Omega,
$$

与理想值 $1/f=-R_F=-10$ kΩ 的差别在 $1/(1+T)=0.04\%$ 以内。

### 第 4 步 — 输入阻抗与输出阻抗

计入负载的基本放大器输入阻抗为 $z_{ia}=R_F=10\ \mathrm{k\Omega}$，输出阻抗为 $z_{oa}=5\ \mathrm{k\Omega}\parallel r_o\parallel R_F=3125\ \Omega$。每个端口都是并联连接，均除以 $1+T$：

$$
Z_{in}=\frac{10\ \mathrm{k\Omega}}{2685}=3.72\ \Omega,\qquad Z_{out}=\frac{3125\ \Omega}{2685}=1.16\ \Omega .
$$

对电路直接进行节点分析得到相同的结果（$-9996$ Ω、3.72 Ω、1.16 Ω）。若忽略 $r_o$，环路增益将被高估约 30%。
