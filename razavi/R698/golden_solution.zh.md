$R_S \approx R_{tot}/12 \approx 1.35\ \Omega$。其中 $R_{tot} = 1/[\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})] \approx 16.2\ \Omega$ 是源漏之间的沟道电阻。较粗略的集总估计 $R_{tot}/4 \approx 4.06\ \Omega$ 把等效串联电阻高估了 3×，但也可以接受。

- $M_1$ 是一个用作去耦电容（decoupling capacitor）的 MOS 电容。其栅极接节点 $X$，由于电感上没有直流压降，该节点的直流电平为 $V_{DD} = 3$ V。源极、漏极和衬底都接地。因此 $V_{GS} = 3$ V，$V_{SB} = 0$，$V_{TH} = 0.7$ V，$V_{DS} = 0$：处于强反型（strong inversion）、深线性区（deep triode）。
- $R_{tot} = 1/[(134\ \mu\mathrm{A/V^2})(200)(2.3\ \mathrm{V})] = 16.2\ \Omega$。
- 沟道是一条均匀的分布式 RC 线（distributed RC line），两端都有接触（源极和漏极接地）。每一半（$R_{tot}/2$，$C/2$）都是一条在中点开路的线，其低频串联电阻为其电阻的三分之一，即 $(R_{tot}/2)/3$；两半相互并联，因此 $R_S = R_{tot}/12 = 1.35\ \Omega$。
- 集总估计 $(R_{tot}/2)\|(R_{tot}/2) = R_{tot}/4 = 4.06\ \Omega$ 相当于假设沟道电荷全部从沟道中点进入。
- 仅供参考：$C \approx WLC_{ox} = (50\ \mu\mathrm{m^2})(3.84\ \mathrm{fF/\mu m^2}) = 192$ fF，本征时间常数为 $R_SC \approx L^2/[12\mu_n(V_{GS}-V_{TH})] \approx 0.26$ ps（若用 $R_{tot}/4$ 则为 0.78 ps）。这部分不作要求：本小题没有给出 $C_{ox}$，3.84 fF/µm² 是 (b) 小题中给出的值。
