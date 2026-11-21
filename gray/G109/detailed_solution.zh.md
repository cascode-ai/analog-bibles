# 详细步骤 - G109

失调就是使输出平衡在 $V_{SUP}-|V_{GS3}|$ 所需的栅源电压差 $V_{GS1}-V_{GS2}$。在该输出电压下两个负载器件的 $V_{DS}$ 相等，所以负载失配决定了强加给 $M_1$、$M_2$ 的漏极电流之比。用平方律把负载的电流失配，连同输入对自身的 $V_t$ 和 $W/L$ 失配，换算成输入电压，再把四项贡献按最坏情况方向相加。

### 第 1 步 — 过驱动电压

每一侧流过 $I_D=50\ \mu\mathrm A$，平均 $(W/L)_N=10$，$(W/L)_P=30$。由平方律 $V_{ov}=\sqrt{2I_D/(k'W/L)}$：

$$
V_{ovN}=\sqrt{\frac{2(50\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(10)}}=0.227\ \mathrm V,\qquad
|V_{ovP}|=\sqrt{\frac{2(50\ \mu\mathrm A)}{(64.7\ \mu\mathrm{A/V^2})(30)}}=0.227\ \mathrm V .
$$

### 第 2 步 — 负载产生的电流失配

$M_3$ 和 $M_4$ 的 $V_{SG}$ 相同，$V_{DS}$ 也相等。由 $I_D=\tfrac{k'}2(W/L)(V_{SG}-|V_t|)^2$，取差值（$\Delta x=x_3-x_4$）得

$$
\frac{I_{D3}-I_{D4}}{I_D}=\frac{\Delta(W/L)_P}{(W/L)_P}-\frac{2\Delta|V_{tP}|}{|V_{ovP}|} .
$$

$M_1$ 必须流过 $I_{D3}$（它为二极管供电），$M_2$ 流过 $I_{D4}$，所以这就是强加给输入对的电流失配 $(I_{D1}-I_{D2})/I_D$。

### 第 3 步 — 折合到输入端的失调

$V_{GS}=V_t+V_{ov}$，且 $V_{ov}\propto\sqrt{I_D/(W/L)}$，所以对小差值（$\Delta x=x_1-x_2$），

$$
V_{OS}=V_{GS1}-V_{GS2}=\Delta V_{tN}+\frac{V_{ovN}}2\left(\frac{I_{D1}-I_{D2}}{I_D}-\frac{\Delta(W/L)_N}{(W/L)_N}\right).
$$

代入第 2 步的结果，

$$
V_{OS}=\Delta V_{tN}+\frac{V_{ovN}}{|V_{ovP}|}\left(-\Delta|V_{tP}|\right)+\frac{V_{ovN}}2\left(\frac{\Delta(W/L)_P}{(W/L)_P}-\frac{\Delta(W/L)_N}{(W/L)_N}\right).
$$

负载的阈值失配按 $V_{ovN}/|V_{ovP}|$ 折合到输入端，每项 $W/L$ 失配的权重为 $V_{ovN}/2$。

### 第 4 步 — 最坏情况

四种失配都取最坏情况的幅度，且符号相加：

| 来源 | 贡献 |
|---|---|
| $\Delta V_{tN}$ | 10 mV |
| $\Delta\lvert V_{tP}\rvert\,V_{ovN}/\lvert V_{ovP}\rvert$ | $(10\ \mathrm{mV})(1.00)=10$ mV |
| $(V_{ovN}/2)\,\Delta(W/L)_P/(W/L)_P$ | $(113.5\ \mathrm{mV})(0.05)=5.7$ mV |
| $(V_{ovN}/2)\,\Delta(W/L)_N/(W/L)_N$ | $(113.5\ \mathrm{mV})(0.05)=5.7$ mV |

$$
|V_{OS}|=10\ \mathrm{mV}+10\ \mathrm{mV}+5.7\ \mathrm{mV}+5.7\ \mathrm{mV}=31\ \mathrm{mV}.
$$

阈值失配约占总量的三分之二。与双极型电路不同，这里没有基极电流项，但失调大了数倍，因为 $V_t$ 失配直接计入，而 $W/L$ 项的比例系数是 $V_{ov}/2\approx114$ mV 而不是 $V_T=26$ mV。
