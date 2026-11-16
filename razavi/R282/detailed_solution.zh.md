# 详细步骤 - R282

**思路。** 由直流偏置求出每个亚阈值器件的栅源电压，用这些电压写出 $g_{m,B}$（饱和区公式）和 $R_{on,R}$（深线性区公式），再求两者的乘积：$\mu C_dV_T$ 和 $\exp(-V_{TH}/V_T)$ 被约去，只剩下宽长比（aspect ratio）之比乘以两个栅源电压之差的指数函数。

### 第 1 步 — 直流电压

把二极管连接的 $M_B$ 的栅极/漏极电压记为 $V_B$，于是 $V_{GS,B} = V_{DS,B} = V_B$。$M_R$ 连接节点 $V_B$ 与节点 X（即 $M_1$ 的栅极），节点 X 只经 $C_B$ 受 $V_{in}$ 驱动，且不取电流，因此 **$M_R$ 中没有直流电流**。导通的沟道在电流为零时两端电压也为零，因此在直流下

$$V_X = V_B, \qquad V_{DS,R} = 0 :$$

$M_R$ 处于**深线性区**，把 X 偏置在 $V_B$，使 $M_1$ 镜像 $I_B$。由于沟道两端都处于 $V_B$，无论把哪一端称为源极，都有

$$V_{GS,R} = V_G - V_B .$$

### 第 2 步 — $M_B$ 的跨导

$M_B$ 处于亚阈值饱和状态（$V_{DS,B} = V_B$，通常为几百毫伏，$\gg V_T \approx 26$ mV）：

$$I_B = \mu C_d\left(\frac{W}{L}\right)_BV_T^2\exp\!\left(\frac{V_B - V_{TH}}{V_T}\right), \qquad g_{m,B} = \frac{I_B}{V_T} = \mu C_d\left(\frac{W}{L}\right)_BV_T\exp\!\left(\frac{V_B - V_{TH}}{V_T}\right).$$

### 第 3 步 — $M_R$ 的导通电阻

$M_R$ 处于亚阈值深线性区，$V_{GS,R} = V_G - V_B$：

$$R_{on,R} = \frac{1}{\mu C_d\left(\frac{W}{L}\right)_RV_T\exp\!\left(\dfrac{V_G - V_B - V_{TH}}{V_T}\right)} .$$

### 第 4 步 — 建立关系式

把两个结果相乘：

$$
\begin{aligned}
R_{on,R}\,g_{m,B} &= \frac{\mu C_d(W/L)_BV_T\exp\!\left(\frac{V_B - V_{TH}}{V_T}\right)}{\mu C_d(W/L)_RV_T\exp\!\left(\frac{V_G - V_B - V_{TH}}{V_T}\right)}\\[4pt]
&= \frac{(W/L)_B}{(W/L)_R}\exp\!\left(\frac{(V_B - V_{TH}) - (V_G - V_B - V_{TH})}{V_T}\right)\\[4pt]
&= \frac{(W/L)_B}{(W/L)_R}\exp\!\left(\frac{V_{GS,B} - V_{GS,R}}{V_T}\right) = \frac{(W/L)_B}{(W/L)_R}\exp\!\left(\frac{2V_B - V_G}{V_T}\right).
\end{aligned}
$$

迁移率（mobility）、$C_d$、前置因子中的 $V_T$ 以及阈值电压（假设两管相等）全部约去；只剩下**尺寸比**和**栅源电压之差**。

**特殊情况。** 若选择 $V_G$ 使两个栅源电压相等，即 $V_G - V_B = V_B$，亦即 $V_G = 2V_B$，则指数项为 1，且

$$R_{on,R} = \frac{(W/L)_B}{(W/L)_R}\cdot\frac{1}{g_{m,B}} .$$

### 第 5 步 — 物理解释与数值示例

- **尺寸。** 窄而长的 $M_R$（$(W/L)_R$ 小）和宽的 $M_B$ 会按尺寸比成比例地增大 $R_{on,R}$。
- **偏置敏感性。** $R_{on,R}$ 与 $V_G - V_B$ 成指数关系：$V_G - V_B$ 每比 $V_B$ 低 60 mV，$R_{on,R}$ 就增大到 10 倍。因此，要得到一个既大**又**确定的电阻，就需要 $V_G$ 跟踪 $V_B$（例如，用 $M_B$ 的复制管产生 $V_G$）。
- **体效应（body effect）。** $M_R$ 的两端处于 $V_B$ 而衬底接地，因此其阈值电压略高于 $M_B$，这使结果乘以 $\exp[(V_{TH,R} - V_{TH,B})/V_T]$。一般地，指数为 $[(V_{GS,B} - V_{TH,B}) - (V_{GS,R} - V_{TH,R})]/V_T$。

**示例。** $I_B = 100$ nA，$V_T = 26$ mV，$(W/L)_B/(W/L)_R = 10$，$V_G = 2V_B$：

$$g_{m,B} = \frac{100\ \mathrm{nA}}{26\ \mathrm{mV}} = 3.85\ \mu\mathrm{S}, \qquad R_{on,R} = \frac{10}{3.85\ \mu\mathrm{S}} = 2.6\ \mathrm{M}\Omega .$$

若改为 $V_G = 2V_B - 60$ mV，则 $R_{on,R} = 26\ \mathrm{M}\Omega$。

### 结果

$$R_{on,R}\,g_{m,B} = \frac{(W/L)_B}{(W/L)_R}\exp\!\left(\frac{V_{GS,B} - V_{GS,R}}{V_T}\right) = \frac{(W/L)_B}{(W/L)_R}\exp\!\left(\frac{2V_B - V_G}{V_T}\right),$$

其中 $V_{GS,B} = V_B$（$M_B$ 的栅极/漏极电压），$V_{GS,R} = V_G - V_B$（$M_R$ 没有直流电流，因此其两端都处于 $V_B$）。这里假设阈值电压相等；否则还要乘以 $\exp[(V_{TH,R} - V_{TH,B})/V_T]$。当 $V_{GS,R} = V_{GS,B}$（即 $V_G = 2V_B$）时：

$$R_{on,R} = \frac{(W/L)_B}{(W/L)_R}\cdot\frac{1}{g_{m,B}}.$$

**常见错误。** 不考虑尺寸和偏置，直接写成 $R_{on,R} = 1/g_{m,B}$。比值 $(W/L)_B/(W/L)_R$ 和 $(V_{GS,B} - V_{GS,R})/V_T$ 的指数函数都会出现在结果中。

**常见错误。** 把尺寸比弄反。$M_R$ **越宽**，导通电阻**越小**，因此 $(W/L)_R$ 应在 $R_{on,R}$ 的分母中；而在相同 $V_{GS}$ 下，$M_B$ 越宽，$g_{m,B}$ 越大。

**常见错误。** 取 $V_{GS,R} = V_G$，即认为 $M_R$ 的源极接地，或者使用平方律（square law）公式。$M_R$ 位于 $V_B$ 与 X 之间，两者都处于 $V_B$，而且两个器件都工作在亚阈值区。
