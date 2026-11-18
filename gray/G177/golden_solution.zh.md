约为 $2.6\times10^6$（输入级约 190，第二级约 265，输出级约 52）。作为比较，$\beta_{npn} = 40$、$\beta_{pnp} = 10$ 时约为 $1.3\times10^5$，因此较高的 β 使增益提高约 20 倍。

输入级（pnp 对管 $Q_3$–$Q_4$，折叠到共基管 $Q_9$/$Q_{10}$，负载为 $Q_{13}$/$Q_{14}$）：
- $R_{up1} = r_{o13}\dfrac{1+g_{m13}R_{13}(\beta_p+1)/\beta_p}{1+g_{m13}R_{13}/\beta_p}$，其中 $r_{o13} = 3.33$ MΩ，$g_{m13}R_{13} = 7.6$：21.7 MΩ。
- $R_{down1} = r_{o9}\dfrac{1+g_{m9}R_9}{1+g_{m9}R_9/\beta_n}$，其中 $r_{o9} = 5$ MΩ，$g_{m9}R_9 = 5.08$：28.6 MΩ。因此 $R_{o1} = 12.3$ MΩ。
- $\rho = \alpha_9R_9/(R_9 + \tfrac{80}{81}\tfrac{26\,\mathrm{mV}}{6\,\mu\mathrm{A}}) = 0.988\times0.837 = 0.827$（进入 $Q_9$ 发射极的份额乘以 $\alpha_9$），$G_{m1} = (3\ \mu\mathrm{A}/26\ \mathrm{mV})\rho = 95.4\ \mu$A/V。
- 第二级差模输入电阻：$R_{i2} = 2[\beta_p/g_{m21} + \tfrac{\beta_p+1}{2}\beta_n/g_{m25}] = 2[130\ \mathrm{k} + 10.5\times208\ \mathrm{k}] = 4.6$ MΩ。
- $a_{v1} = G_{m1}(R_{o1}\parallel R_{i2}/2) = 95.4\ \mu\mathrm{A/V}\times(12.3\ \mathrm{M}\parallel2.31\ \mathrm{M}) \approx 186$。

第二级（射极跟随器 $Q_{21}$/$Q_{22}$ 驱动分裂对管 $Q_{25}$–$Q_{28}$；负载为 $Q_{17}$/$Q_{18}$）：
- $R_{up2} = r_{o17}\dfrac{1+g_{m17}R_{17}(21/20)}{1+g_{m17}R_{17}/20}$，其中 $r_{o17} = 0.95$ MΩ，$g_{m17}R_{17} = 7.5$：6.15 MΩ。
- $R_{E25} \approx \tfrac{80}{81}\tfrac{1}{g_{m26}}\parallel\tfrac{1}{g_{m27}}\parallel\tfrac{1}{g_{m28}} = 0.86$ kΩ，因此 $R_{down2} = r_{o25}(1+g_{m25}R_{E25}) = 3\ \mathrm{M}\times1.33 = 4.0$ MΩ，$R_{o2} = 2.42$ MΩ。
- 射极跟随器增益 $a_{v21} = 1/[1 + r_{\pi21}/((\beta_p+1)(r_{\pi25}/2\parallel r_{o21}))] = 0.94$。
- $G_{m2} = a_{v21}\left[\dfrac{g_{m25}}{1+g_{m25}R_{E25}} - \dfrac{g_{m26}}{3(1+g_{m26}R_{E26})}\right] \approx 0.94\times(289 - 96) \approx 181\ \mu$A/V。
- 偏置环路使 $I_{C75}$ 保持恒定，因此 $Q_{40}$ 提供节点 26 的信号电流，而 $Q_{39}$ 在节点 25 加入一个相等的电流。这使流入节点 25 的等效跨导加倍。
- $Q_{39}$ 的集电极对节点 25 的负载作用可以忽略：其基极电压和尾电流固定，$Q_{40}$ 的电流由环路设定，因此 $Q_{39}$ 的发射极电流固定，其集电极电阻约为 $(\beta_n+1)r_{o39} \approx 81\times3.3\ \mathrm{M\Omega} \approx 0.27$ GΩ。（若把 $Q_{39}$ 看作发射极经 $R_{39}$、$R_{40}$ 和 $1/g_{m40}$ 接到固定的 $Q_{40}$ 基极的带负反馈电流源，则 $R_{o39} \approx 11$–$12$ MΩ，$a_{v2}$ 降到约 250，总增益降到约 $2.4\times10^6$，仍在可接受范围内。）

输出级，直流修正：
- $I_{C62} \approx 6 - 39/80 = 5.5\ \mu$A，因此 $I_{C63} \approx 28.6\ \mu$A。
- $|I_{C65}| = \tfrac{20}{21}(100 + 1200/20) = 152\ \mu$A。
- $I_{C64} = \tfrac{80}{81}(28.6 - 152/20) \approx 21\ \mu$A。
- $I_{C68} = \tfrac{80}{81}(6 + 210/80) \approx 8.5\ \mu$A。

输出级，小信号：
- $R_{E65} = R_{65}\parallel\beta_pV_T/|I_{C66}|\parallel\beta_pV_T/|I_{C74}| = 7.5\ \mathrm{k}\parallel13.9\ \mathrm{k}\parallel433 = 0.40$ kΩ。
- $R_{E64} = [r_{o63}(1+g_{m63}R_{63})]\parallel[r_{\pi65} + 21R_{E65}] \approx 2.4\ \mathrm{M}\parallel11.8\ \mathrm{k} = 11.7$ kΩ。
- $R_{i3(25)} = r_{\pi64} + 81R_{E64} \approx 100\ \mathrm{k} + 949\ \mathrm{k} = 1.05$ MΩ。
- $a_{v2} = 2G_{m2}(R_{o2}\parallel R_{i3(25)}) = 2\times181\ \mu\mathrm{A/V}\times0.73\ \mathrm{M\Omega} \approx 265$。
- 跟随器增益：$a_{v64} = 1/[1 + r_{\pi64}/(81R_{E64})] = 0.90$，$a_{v65} = 1/[1 + r_{\pi65}/(21R_{E65})] = 0.71$。
- $G_{m3} = a_{v64}a_{v65}g_{m74} = 0.90\times0.71\times46\ \mathrm{mA/V} \approx 29.6$ mA/V。$R_{o3} = r_{o74}\parallel r_{o75} = 16.7\ \mathrm{k}\parallel143\ \mathrm{k} = 15$ kΩ。
- $a_{v3} = G_{m3}(R_{o3}\parallel2\ \mathrm{k\Omega}) \approx 29.6\ \mathrm{mA/V}\times1.76\ \mathrm{k\Omega} \approx 52$。

总增益：$a_v = 186\times265\times52 \approx 2.6\times10^6$。
