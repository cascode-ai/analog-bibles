# 详细步骤 - G370

信号源是带并联电阻的电流源，因此自然的描述方式是输入节点处的噪声电流。从晶体管的等效输入噪声源出发，把反馈电阻的噪声移到输入端（并联反馈在输入端加入其热噪声电流），再以源电阻的噪声电流 $4kT/R_S$ 为基准计算噪声系数。

### 第 1 步 — 晶体管噪声源

在 $I_C=0.5$ mA 时，$g_m=19.2$ mS（$1/2g_m=26\ \Omega$），$I_B=I_C/\beta=10\ \mu$A：

$$
\frac{\overline{v_{ia}^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}\right)=4kT(126\ \Omega)=2.09\times10^{-18}\ \mathrm{V^2/Hz},
$$

$$
\frac{\overline{i_{ia}^2}}{\Delta f}=2q\left(I_B+\frac{I_C}{\beta^2}\right)=3.2\times10^{-24}+6.4\times10^{-26}=3.26\times10^{-24}\ \mathrm{A^2/Hz}.
$$

### 第 2 步 — 反馈放大器的噪声源

反馈电阻 $R_F$ 连接输入节点和集电极。输入开路时，其热噪声电流 $4kT/R_F$ 流入输入节点，晶体管的电压噪声源也通过 $R_F$ 向该节点注入电流 $v_{ia}/R_F$。输入短路时，$R_F$ 只对输出构成负载，因此电压噪声源基本不变。对于输入端的并联反馈：

$$
\frac{\overline{i_i^2}}{\Delta f}=\frac{\overline{i_{ia}^2}}{\Delta f}+\frac{\overline{v_{ia}^2}}{R_F^2\,\Delta f}+\frac{4kT}{R_F}
=3.26\times10^{-24}+2.1\times10^{-26}+1.66\times10^{-24}=4.94\times10^{-24}\ \mathrm{A^2/Hz},
$$

且 $\overline{v_i^2}\approx\overline{v_{ia}^2}$。10 kΩ 集电极负载经很大的跨阻折算到输入，可以忽略。

### 第 3 步 — $R_S=10$ kΩ 时的噪声系数

对于带并联电阻 $R_S$ 的电流源，信号源噪声为电流 $4kT/R_S$，放大器的电压噪声源在 $R_S$ 中产生电流 $v_i/R_S$。忽略相关性：

$$
F=1+\frac{\overline{i_i^2}+\overline{v_i^2}/R_S^2}{4kT/R_S\cdot\Delta f}
=1+\frac{4.94\times10^{-24}+2.1\times10^{-26}}{1.66\times10^{-24}}=3.99,
$$

$$
\mathrm{NF}=10\log_{10}3.99=6.0\ \mathrm{dB}.
$$

### 第 4 步 — 主要贡献

基极电流散粒噪声（$3.2\times10^{-24}$ A²/Hz，约为信号源噪声的两倍）和反馈电阻的热噪声（$1.66\times10^{-24}$ A²/Hz，由于 $R_F=R_S$，与信号源噪声相等）占主导；在 10 kΩ 源电阻下电压噪声源可以忽略。保留噪声源之间相关性的精确节点分析给出约 6.2 dB。
