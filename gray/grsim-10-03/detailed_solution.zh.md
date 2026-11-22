# 详细步骤 - grsim-10-03

射极耦合对的差分输出电流为 $I_{\text{out}}=I_{EE}\tanh(V_{id}/2V_T)$（取 $\alpha\approx1$）。正弦输入时，tanh 的奇函数部分产生奇次谐波；匹配器件不产生偶次谐波。把 tanh 展开到三次项，并利用 $\sin^3\theta=\tfrac34\sin\theta-\tfrac14\sin3\theta$，即可得到三次谐波比随幅值的变化，从而求出 1 % 失真对应的最大幅值。用 ngspice 瞬态和傅里叶分析检验这一结果，并给出发射极负反馈的效果。

### 第 1 步 — (a) 级数展开

设输入为 $V_{id}=V_p\sin\omega_ot$，令 $a=V_p/2V_T$，于是 tanh 的自变量为 $x=a\sin\omega_ot$。取 $\tanh x\approx x-x^3/3$：

$$
\begin{aligned}
\frac{I_{\text{out}}}{I_{EE}}&\approx a\sin\omega_ot-\frac{a^3}{3}\sin^3\omega_ot
=a\sin\omega_ot-\frac{a^3}{3}\left(\frac34\sin\omega_ot-\frac14\sin3\omega_ot\right)\\
&=\left(a-\frac{a^3}{4}\right)\sin\omega_ot+\frac{a^3}{12}\sin3\omega_ot .
\end{aligned}
$$

与 $I_o(\sin\omega_ot+\delta\sin3\omega_ot)$ 比较：

$$
\delta=\frac{a^3/12}{a-a^3/4}=\frac{a^2/12}{1-a^2/4}.
$$

### 第 2 步 — (a) 三次谐波为 1 % 时的最大幅值

令 $\delta=0.01$：

$$
\frac{a^2}{12}=0.01\left(1-\frac{a^2}{4}\right)\ \Rightarrow\ a^2=\frac{0.12}{1.03}=0.1165,\qquad a=0.341,
$$

$$
V_p=2aV_T=2(0.341)(26\ \mathrm{mV})=17.7\ \mathrm{mV}\ (0.683\,V_T).
$$

若略去分母中很小的 $a^2/4$（$\delta\approx a^2/12$），得 $a=0.346$，$V_p=18.0$ mV。由于三次谐波按 $V_p^2$ 增长，要使失真不超过 1 %，输入峰值必须低于约 18 mV。

### 第 3 步 — (b) SPICE 检验

差分对取 $I_{EE}=1$ mA，npn 晶体管 $I_S=10^{-16}$ A、$\beta=100$、无厄利效应，温度设为 $V_T=26$ mV 对应的值。17.7 mV 峰值的差分输入以 $\pm8.85$ mV、1 kHz 分别加到两个基极。行为源把 $I_{c1}-I_{c2}$（由集电极中的 0 V 源测量）转换为电压，供傅里叶分析使用。要分辨远低于基波的谐波，需要严格的容差设置。

```spice
* grsim-10-03 emitter-coupled pair (RE = 1m for part (b), 200 for part (c))
.options temp=28.57 tnom=28.57 reltol=1e-7 abstol=1e-15 vntol=1e-9
.model qn npn is=1e-16 bf=100
VCC vcc 0 5
VEE vee 0 -5
Vc1 vcc c1 0
Vc2 vcc c2 0
Q1 c1 b1 e1 qn
Q2 c2 b2 e2 qn
RE1 e1 t 1m
RE2 e2 t 1m
IEE t vee 1m
Vp b1 0 sin(0 8.85m 1k)
Vn b2 0 sin(0 -8.85m 1k)
Bout out 0 v=i(Vc1)-i(Vc2)
Rout out 0 1
.tran 1u 10m 0 1u
.four 1k v(out)
.end
```

| 谐波 | 幅值 | 相对基波 |
|---|---|---|
| 基波 | 0.328 mA | — |
| 二次 | $1.6\times10^{-15}$ A | $\approx5\times10^{-12}$（数值噪声） |
| 三次 | 3.07 µA | 0.94 % |

精确的 tanh 特性在 17.7 mV 处给出 0.94 %，略低于 1 % 的目标。两项级数略微高估了失真，所以手算结果得到证实，且略偏保守。由于器件匹配，二次谐波为零。基波 $0.328I_{EE}$ 接近 $I_{EE}(a-a^3/4)=0.331I_{EE}$；有限 $\beta$ 使两个电流都乘以 $\alpha$，不改变比值。

### 第 4 步 — (c) 发射极负反馈

每个发射极中加 $R_E=200\ \Omega$，平衡时 $I_ER_E=(0.5\ \mathrm{mA})(200\ \Omega)=100$ mV。把同一网表的 `RE1`、`RE2` 设为 200 Ω，输入仍为 17.7 mV，得到：

| 谐波 | 幅值 | 相对基波 |
|---|---|---|
| 基波 | 69.5 µA | — |
| 三次 | 5.91 nA | 0.0085 %（$8.5\times10^{-5}$） |

负反馈使三次谐波降低约 110 倍，使基波降低 4.7 倍。

手算可以证实这一点。设 $y=I_{\text{out}}/I_{EE}$，输入电压分配在结和电阻上：

$$
V_{id}=2V_T\tanh^{-1}y+I_{EE}R_E\,y\approx\underbrace{(2V_T+I_{EE}R_E)}_{g=0.252\ \mathrm{V}}\,y+\frac{2V_T}{3}y^3 .
$$

对级数求逆得 $y\approx V_{id}/g-(2V_T/3)V_{id}^3/g^4$，所以

$$
HD_3\approx\frac{V_TV_p^2}{6g^3}=\frac{(0.026)(0.0177)^2}{6(0.252)^3}=8.5\times10^{-5},
$$

与仿真一致。与无负反馈的差分对相比，失真降低 $(g/2V_T)^3=(1+g_mR_E)^3=4.85^3\approx114$ 倍，而增益只降低 $g/2V_T=4.85$ 倍。这是常见的折中：经 $R_E$ 的局部反馈对级的线性化作用远大于它对增益的削弱。
