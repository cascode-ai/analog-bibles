$a_{dm} \approx -66.7$，$R_{od} \approx 133$ kΩ，$a_{cm} = -G_{mc}R_{oc} \approx -1.92$（若采用近似 $G_{mc} \approx 1/r_{o5h}$，则约为 −1.96 到 −2），$R_{oc} \approx 196$ kΩ，$G_{md} = 0.5$ mA/V，$G_{mc} \approx 9.8\ \mu$A/V（≈ 10 μA/V）。
- T 形网络：串联电阻 $R_{od}/2 \approx 66.7$ kΩ，电压源 $a_{dm}v_{id}/2$，其中 $a_{dm} = -66.7$；并联电阻 $R_{oc}/2 - R_{od}/4 \approx 98 - 33.3 = 64.7$ kΩ，电压源 $a_{cm}v_{ic}$，其中 $a_{cm} \approx -1.92$。
- π 形网络：每个输出端接并联电阻 $R_{oc} \approx 196$ kΩ 和电流源 $G_{mc}v_{ic}$，其中 $G_{mc} \approx 9.8$–$10\ \mu$A/V；跨接元件为 $R_{od}\|(-2R_{oc}) \approx 133\|(-392) \approx 202$ kΩ，与 $G_{md}v_{id}$ 并联，$G_{md} = 0.5$ mA/V。

推导（$g_{m1} = 2I_D/V_{ov} = 1$ mA/V，$r_{o1} = 100$ kΩ，$r_{o3} = 200$ kΩ，$r_{o5} = 50$ kΩ，半边尾电流管 $r_{o5h} = 2r_{o5} = 100$ kΩ，$g_{m5h} = 1$ mA/V）：
- 差模半边电路（half circuit）（尾节点为交流地）：以 $r_{o3}$ 为负载的共源管 $M_1$。$R_{od}/2 = r_{o1}\|r_{o3} = 66.7$ kΩ，$a_{dm} = -g_{m1}(r_{o1}\|r_{o3}) = -66.7$。将输出短路，$i_{od} = g_{m1}v_{id}/2$，因此 $G_{md} = g_{m1}/2 = 0.5$ mA/V（验算：$a_{dm} = -G_{md}R_{od}$）。
- 共模半边电路（$M_1$ 带 $r_{o5h}$ 源极负反馈）：$R_{o(\text{down})} = r_{o1}(1 + g_{m1}r_{o5h}) \approx 10.1$–10.2 MΩ，$R_{oc} = R_{o(\text{down})}\|r_{o3} \approx 196$ kΩ。$G_{mc} = g_{m1}/(1 + g_{m1}r_{o5h} + r_{o5h}/r_{o1}) \approx 1/r_{o5h} \approx 9.8$–10 μA/V，$a_{cm} = -G_{mc}R_{oc} = -9.80\ \mu\text{A/V} \times 196\ \text{k}\Omega \approx -1.92$（采用近似的 $G_{mc}$ 时 ≈ $-R_{oc}/r_{o5h} \approx -1.96$）。
