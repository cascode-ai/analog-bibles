# 详细步骤 - A107

匹配的 NMOS 对管 M1–M2 流过相等的电流，迫使两管源极电压相等。这样 D1 与 D2 的二极管电压之差落在 $R_1$ 上，确定了一个 PTAT 电流。电流镜把该电流复制到 $R_2$ 和 D3 中，于是 $V_{REF}$ 等于一个二极管电压加上按比例放大的 PTAT 电压。用题给二极管模型写出 $T_0$ 处的零温度系数条件，即可确定 $R_2$ 和 $V_{REF}$。

### 第 1 步 — 电流相等迫使源极电压相等

共源共栅 PMOS 电流镜 M3–M8 提供 $I_1=I_2=I_3\equiv I$。M1 和 M2 完全相同、处于饱和区、栅极相连且电流相同，由平方律得 $V_{GS1}=V_{GS2}$。两管栅极电位相同，所以源极电位也相同：

$$
V_{D1}=IR_1+V_{D2}.
$$

两管源极电位相同，因此即使存在体效应，M1 和 M2 的阈值也相等，上述关系严格成立。

### 第 2 步 — 流过 $R_1$ 的 PTAT 电流

正偏二极管有 $V_D=V_t\ln[I/(AJ_s)]$。D2 的面积是 D1 的 $n$ 倍，两者都流过 $I$：

$$
IR_1=V_{D1}-V_{D2}=V_t\ln n
\quad\Rightarrow\quad
I=\frac{V_t\ln n}{R_1}=\frac{(0.026\ \mathrm V)(2.3026)}{10\ \mathrm{k\Omega}}=5.99\ \mu\mathrm A .
$$

$V_t\ln n=59.87$ mV 与 $T$ 成正比，所以 $I$ 是 PTAT 电流，正是二极管模型所假定的偏置。

### 第 3 步 — 输出电压

M5 把 $I_3=I$ 送入 $R_2$ 与 D3 的串联支路，$V_{REF}$ 取自该串联组合两端：

$$
V_{REF}=V_{D3}+IR_2=V_{D3}+\frac{R_2}{R_1}V_t\ln n .
$$

### 第 4 步 — 零温度系数

在 $T=T_0$ 处对二极管模型求导，此处 $T\ln(T/T_0)$ 的导数等于 1：

$$
\left.\frac{dV_{D3}}{dT}\right|_{T_0}=-\frac{V_{G0}-V_{D3}+(\gamma-\alpha)V_{t0}}{T_0},
\qquad
\frac{d}{dT}\left(\frac{R_2}{R_1}V_t\ln n\right)=\frac{R_2}{R_1}\frac{V_{t0}\ln n}{T_0},
$$

其中 $V_{D3}$ 为室温下的二极管电压，$V_{t0}=0.026$ V。令 $dV_{REF}/dT=0$：

$$
\frac{R_2}{R_1}V_{t0}\ln n=V_{G0}-V_{D3}+(\gamma-\alpha)V_{t0}
\quad\Rightarrow\quad
R_2=R_1\,\frac{V_{G0}+(\gamma-\alpha)V_{t0}-V_{D3}}{V_{t0}\ln n}.
$$

### 第 5 步 — $V_{REF}$ 与 $R_2$

把零温度系数条件代入第 3 步，$V_{D3}$ 相消：

$$
V_{REF}=V_{G0}+(\gamma-\alpha)V_{t0}=1.205\ \mathrm V+2.2(0.026\ \mathrm V)=1.262\ \mathrm V .
$$

于是

$$
R_2=10\ \mathrm{k\Omega}\times\frac{1.262\ \mathrm V-V_{D3}}{0.05987\ \mathrm V},
$$

$V_{D3}=0.6$ V 时，$R_2/R_1=0.6622/0.05987=11.06$，故 $R_2=110.6$ kΩ。无论 $V_{D3}$ 取何值，室温输出都是 1.262 V；只有电阻值与之有关（例如 $V_{D3}=0.7$ V 时为 93.9 kΩ）。
