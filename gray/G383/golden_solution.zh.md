$a_{dm} \approx -133$，$R_{od} \approx 267$ kΩ，$a_{cm} \approx -1.98$，$R_{oc} \approx 396$ kΩ，$G_{md} = 0.5$ mA/V，$G_{mc} \approx 5\ \mu$A/V。
- T 形网络：串联电阻 $R_{od}/2 \approx 133$ kΩ，电压源 $a_{dm}v_{id}/2$，其中 $a_{dm} = -133$；并联电阻 $R_{oc}/2 - R_{od}/4 \approx 198 - 66.7 \approx 131$ kΩ，电压源 $a_{cm}v_{ic}$，其中 $a_{cm} \approx -1.98$。
- π 形网络：每个输出端接 $R_{oc} \approx 396$ kΩ 和 $G_{mc} \approx 5\ \mu$A/V；跨接元件为 $R_{od}\|(-2R_{oc}) \approx 267\|(-792) \approx 402$ kΩ，与 $G_{md}v_{id}$ 并联，$G_{md} = 0.5$ mA/V。

推导：$g_{m1} = 2(50\ \mu\text{A})/0.1\ \text{V} = 1$ mA/V，$r_{o1} = 10/50\ \mu\text{A} = 200$ kΩ，$r_{o3} = 20/50\ \mu\text{A} = 400$ kΩ，$r_{o5} = 100$ kΩ，$r_{o5h} = 200$ kΩ。
- 差模：$R_{od}/2 = r_{o1}\|r_{o3} = 133$ kΩ，$a_{dm} = -g_{m1}(r_{o1}\|r_{o3}) = -133$，$G_{md} = g_{m1}/2$。
- 共模：$R_{o(\text{down})} \approx r_{o1}g_{m1}r_{o5h} = 40$ MΩ，$R_{oc} = 40\ \text{M}\|400\ \text{k} \approx 396$ kΩ；$G_{mc} \approx 1/r_{o5h} = 5\ \mu$A/V（精确值 4.95）；$a_{cm} \approx -R_{oc}/r_{o5h} = -1.98$（采用精确的 $G_{mc}$ 时为 −1.96）。
