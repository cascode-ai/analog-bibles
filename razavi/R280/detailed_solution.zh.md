# 详细步骤 - R280

**思路。** 在深线性区中 $V_{DS} \ll V_T$，因此把 $1 - \exp(-V_{DS}/V_T)$ 展开到一阶后，$I_D$ 与 $V_{DS}$ 成正比：器件的行为就像一个线性电阻，$R_{on} = V_{DS}/I_D$。

### 第 1 步 — 在 $V_{DS} \ll V_T$ 条件下线性化

把与栅极电压有关的部分记为

$$I_0 \equiv \mu C_d\frac{W}{L}V_T^2\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right),$$

它是器件在相同 $V_{GS}$ 下处于亚阈值饱和（$V_{DS} \gg V_T$）时的电流，因此 $I_D = I_0\left[1 - \exp(-V_{DS}/V_T)\right]$。令 $\epsilon = V_{DS}/V_T \ll 1$，并利用 $\exp(-\epsilon) \approx 1 - \epsilon$，

$$1 - \exp\!\left(-\frac{V_{DS}}{V_T}\right) \approx 1 - \left(1 - \frac{V_{DS}}{V_T}\right) = \frac{V_{DS}}{V_T},$$

$$
\begin{aligned}
I_D &\approx \mu C_d\frac{W}{L}V_T^2\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)\cdot\frac{V_{DS}}{V_T}\\
&= \mu C_d\frac{W}{L}V_T\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)V_{DS}.
\end{aligned}
$$

一个 $V_T$ 因子被约去，电流**与 $V_{DS}$ 成正比**：对于固定的 $V_{GS}$，沟道相当于一个线性电阻。

### 第 2 步 — 导通电阻

$$R_{on} = \frac{V_{DS}}{I_D} = \frac{V_{DS}}{\mu C_d\frac{W}{L}V_T\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)V_{DS}} ,$$

约去 $V_{DS}$ 后，

$$R_{on} = \frac{1}{\mu C_d\dfrac{W}{L}V_T\exp\!\left(\dfrac{V_{GS} - V_{TH}}{V_T}\right)} = \frac{V_T}{I_0},$$

即热电压（thermal voltage）除以相同 $V_{GS}$ 下的亚阈值饱和电流。

**验算。** 对精确表达式求导，得 $\partial I_D/\partial V_{DS} = (I_0/V_T)\exp(-V_{DS}/V_T)$，在 $V_{DS} = 0$ 处等于 $I_0/V_T$：给出相同的 $R_{on} = V_T/I_0$ ✓。

### 第 3 步 — $R_{on}$ 与 $V_{GS}$ 的关系

$$R_{on} \propto \exp\!\left(-\frac{V_{GS} - V_{TH}}{V_T}\right):$$

$V_{GS}$ 升高 $V_T$（≈ 26 mV）会使 $R_{on}$ 除以 $e \approx 2.7$，升高 $V_T\ln10 \approx 60$ mV 则使它除以 10。相比之下，在强反型（strong inversion）区，$R_{on} = 1/[\mu C_{ox}(W/L)(V_{GS} - V_{TH})]$ 只是与过驱动电压（overdrive voltage）成简单的反比关系。

### 第 4 步 — 数值示例

假设在某个 $V_{GS}$ 下，亚阈值饱和电流为 $I_0 = 100$ nA，且 $V_T = 26$ mV：

$$R_{on} = \frac{V_T}{I_0} = \frac{26\ \mathrm{mV}}{100\ \mathrm{nA}} = 260\ \mathrm{k}\Omega .$$

把 $V_{GS}$ 升高 60 mV，则 $I_0 = 1\ \mu\mathrm{A}$，$R_{on} = 26\ \mathrm{k}\Omega$。

**线性化的精度。** 在 $V_{DS} = V_T/10$ 处，精确因子为 $1 - e^{-0.1} = 0.0952$，而近似值为 0.1，相差 5 %。因此这里的“深线性区”意味着 $V_{DS}$ 只有几毫伏，远小于强反型时的情况——在强反型下，线性区一直延伸到 $V_{GS} - V_{TH}$。

### 结果

当 $V_{DS} \ll V_T$ 时，$1 - \exp(-V_{DS}/V_T) \approx V_{DS}/V_T$，因此 $I_D \approx \mu C_d\frac{W}{L}V_T\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)V_{DS}$，与 $V_{DS}$ 成线性关系，且

$$R_{on} = \frac{1}{\mu C_d\frac{W}{L}V_T\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)} = \frac{V_T}{I_{D,sat}},$$

其中 $I_{D,sat}$ 是相同 $V_{GS}$ 下的亚阈值饱和电流。随着 $V_{GS}$ 升高，$R_{on}$ 按指数规律减小，每升高 $V_T$ 缩小 $e$ 倍。

**常见错误。** 写成 $R_{on} \propto \exp[(V_{GS} - V_{TH})/V_T]$。在相同的 $V_{DS}$ 下，栅极电压越大，电流**越大**，电阻因而**越小**：指数项应当在分母中。

**常见错误。** 保留了错误的 $V_T$ 幂次。前置因子中有 $V_T^2$，但线性化引入了 $V_{DS}/V_T$，因此 $R_{on}$ 中只剩一个 $V_T$；保留 $V_T^2$（或一个也不保留）会导致量纲错误。

**常见错误。** 套用强反型下的结果 $1/[\mu C_{ox}(W/L)(V_{GS} - V_{TH})]$。在亚阈值区 $V_{GS} - V_{TH} < 0$，因此该公式甚至会给出负电阻（negative resistance）。
