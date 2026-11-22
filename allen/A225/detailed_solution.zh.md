# 详细步骤 - A225

对每个电路找出使输出最高的输入，再利用空载跟随器中两只串联晶体管电流相等这一事实：要么两管都导通，令其平方律电流相等；要么一管截止，另一管必须停在零电流处。此大信号计算忽略沟道长度调制；$\beta_N=K'_N(W/L)=2\beta_P$。

### 第 1 步 — n 沟道跟随器（电路 1、3、5）

n 沟道跟随器的输出随 $v_{in}$ 升高，取 $v_{in}=V_{DD}$。此时 M1 的 $V_{GS1}=V_{DD}-v_o$，$V_{DS1}=V_{DD}-v_o\ge V_{GS1}-V_T$，处于饱和区，输出至少比 $V_{DD}$ 低 $V_T$。

- **电路 1**（接地的 n 沟道二极管 M2，$V_{GS2}=v_o$）：相同器件电流相等要求栅源电压相等，$V_{DD}-v_o=v_o$，故 $v_o(\max)=V_{DD}/2$。
- **电路 3**（p 沟道 M2 源极接输出，栅极和漏极接地，$V_{SG2}=v_o$）：
$$
\frac{\beta_N}{2}(V_{DD}-v_o-V_T)^2=\frac{\beta_P}{2}(v_o-V_T)^2
\;\Rightarrow\;\sqrt2\,(V_{DD}-v_o-V_T)=v_o-V_T,
$$
$$
v_o(\max)=\frac{\sqrt2\,V_{DD}-(\sqrt2-1)V_T}{1+\sqrt2}\approx0.586V_{DD}-0.172V_T .
$$
- **电路 5**（流过 $I$ 的 n 沟道电流沉 M2）：M1 必须流过 $I$，故 $V_{GS1}=V_T+\sqrt{2I/\beta_N}$，$v_o(\max)=V_{DD}-V_T-\sqrt{2I/\beta_N}$。

### 第 2 步 — p 沟道跟随器（电路 2、4、6）

p 沟道跟随器的输出随 $v_{in}$ 升高而升高；$v_{in}$ 接近 $V_{DD}$ 时跟随管截止（$V_{SG}=v_o-v_{in}<V_T$）。空载输出此时没有电流通路，上拉器件必须到达零电流：

- **电路 2**（接 $V_{DD}$ 的 p 沟道二极管 M2，$V_{SG2}=V_{DD}-v_o$）：$V_{SG2}=V_T$ 时其电流为零，故 $v_o(\max)=V_{DD}-V_T$。
- **电路 4**（n 沟道 M2 的栅极和漏极接 $V_{DD}$，源极接输出，$V_{GS2}=V_{DD}-v_o$）：同理 $v_o(\max)=V_{DD}-V_T$。
- **电路 6**（栅极接 $V_{BP}$ 的 p 沟道电流源 M1；跟随管为 M2）：M1 的 $V_{SG1}=V_{DD}-V_{BP}>V_T$ 固定，始终导通。其电流只有在 $V_{SD1}=0$（深线性区）时才为零，故 $v_o(\max)=V_{DD}$。

### 第 3 步 — 电路 3 和 5 高于 $V_{DD}/2$

只要 $V_{DD}>2V_T$，电路 3 就高于电路 1：

$$
v_{o3}-\frac{V_{DD}}2=\frac{2\sqrt2\,V_{DD}-2(\sqrt2-1)V_T-(1+\sqrt2)V_{DD}}{2(1+\sqrt2)}
=\frac{(\sqrt2-1)(V_{DD}-2V_T)}{2(1+\sqrt2)}>0 .
$$

对电路 5，过驱动电压 $\sqrt{2I/\beta_N}$ 有上界，因为公共电流 $I$ 必须能在每个电路中、两管都饱和时实现。最紧的界来自电路 2：其电流在 $v_{in}=0$ 时最大，此时两只相同的 p 沟道器件平分电源电压（$V_{SG1}=V_{SG2}=V_{DD}/2$），所以

$$
I\le\frac{\beta_P}{2}\Big(\frac{V_{DD}}2-V_T\Big)^2
\;\Rightarrow\;
\sqrt{\frac{2I}{\beta_N}}=\frac{1}{\sqrt2}\sqrt{\frac{2I}{\beta_P}}\le\frac{1}{\sqrt2}\Big(\frac{V_{DD}}2-V_T\Big).
$$

于是

$$
v_{o5}-\frac{V_{DD}}2\ge\Big(\frac{V_{DD}}2-V_T\Big)\Big(1-\frac1{\sqrt2}\Big)>0 .
$$

（电路 1 自身的界 $\sqrt{2I/\beta_N}\le V_{DD}/2-V_T$ 已给出 $v_{o5}\ge V_{DD}/2$。）

### 第 4 步 — $v_o(\max)$ 最低：电路 1

| 电路 | $v_o(\max)$ |
|---|---|
| 1 | $V_{DD}/2$ |
| 3 | $\approx0.586V_{DD}-0.172V_T>V_{DD}/2$ |
| 5 | $V_{DD}-V_T-\sqrt{2I/\beta_N}>V_{DD}/2$ |
| 2、4 | $V_{DD}-V_T$ |
| 6 | $V_{DD}$ |

因此只有**电路 1** 的 $v_o(\max)=V_{DD}/2$ 最低：其跟随管与相同的二极管负载平分电源电压。该结果与沟道长度调制无关，因为两管的漏源电压也相等（$V_{DS1}=V_{DD}-v_o$，$V_{DS2}=v_o$）。有限的 $\lambda$ 只有在 $V_{BN}>V_{DD}/2$ 时才可能把电路 5 拉到 $V_{DD}/2$ 以下，结合电路 2 的电流上界，这要求 $\lambda_N\ge1/(2V_T)$，对 $V_T=0.7$ V 约为 $0.7\ \mathrm{V^{-1}}$，远超任何实际器件。
