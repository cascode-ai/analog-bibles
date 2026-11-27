# Golden Solution - R063

## 参考答案

- 栅压步长。各拐点给出 $V_{ov}=V_{GS}-V_{TH}\approx 0.1,0.2,\ldots,0.6\ \mathrm{V}$，所以 $\Delta V_{GS}\approx 0.10\ \mathrm{V}$。
- 沟道长度调制。最上方曲线在 $V_{DS}=0.6$ V 和 $1.0$ V 处的 $I_D$ 分别约为 2.95 mA 和 3.25 mA。饱和段斜率为 $0.75\ \mathrm{mA/V}$，外推截距为 $I_{D0}\approx2.50$ mA，因此 $\lambda=0.75/2.50\ \mathrm{V^{-1}}\approx0.30\ \mathrm{V^{-1}}$。
- 迁移率。由 $I_{D0}=\tfrac12\beta V_{ov}^2$ 得 $\beta\approx13.9\ \mathrm{mA/V^2}$。代入 $C_{ox}=3.9\epsilon_0/t_{ox}\approx0.0192\ \mathrm{F/m^2}$ 及 $W/L=125$ 得 $\mu_n=\beta/[C_{ox}(W/L)]\approx5.8\times10^{-3}\ \mathrm{m^2/(V\,s)}=58\ \mathrm{cm^2/(V\,s)}$。
- 阈值。原题图 1 给出过驱动电压，取最下方曲线可得 $V_{TH}=V_{GS,6}-0.1\ \mathrm{V}$。若最上方曲线对应 $V_{GS}=1.0$ V，则 $V_{TH}\approx0.4$ V。

![平方律模型拟合辅助图](/q/R063/solution-01.zh.svg)

## 评分说明

- +2：步长为 0.09–0.11 V，$\lambda$ 约为 0.25–0.4 V⁻¹，使用 $C_{ox}$ 和 $W/L=125$ 的计算得到 $\mu_n$ 约为 50–75 cm²/(V·s)，并给出 $V_{TH}$ 的关系式及图中只能确定过驱动电压的理由，或在明确绝对 $V_{GS}$ 假设的条件下给出约 0.4 V。
- +1：四个量中三个正确，或四个都正确但有一处小错误。若迁移率的 SI 值正确，但换算成 cm²/(V·s) 时出错，则迁移率部分最高计 0，其他三项正确时总评为 +1。
- 0：约一半正确。
- −2：明确把电流间隔当作栅压步长、把 $\lambda$ 错估一个数量级、因公式或推导中的单位错误使迁移率偏差至少 3 倍，或误读 $V_{DS}$ 轴并断言阈值。
