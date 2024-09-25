import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './styles'
import { icons } from '../../Helper/icons'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient';
const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timeout = setTimeout(() => {
       navigation.navigate('Onboard');
    }, 1000);
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (


    <LinearGradient
      colors={['#35b257',
        '#3bc45f',
        '#4eca6f',
        '#62d07f',
        '#76d68f',
        '#89dc9f',
        '#9de2af',
        '#b0e8bf',
        '#c4edcf',
        '#d8f3df',
        '#ebf9ef',
        '#ffffff'

      ]}
      style={styles.cantainer}
    >
      <LinearGradient colors={[
        '#35b257',
         '#3bc45f',
        '#4eca6f',
        '#62d07f',
        '#76d68f',
        '#89dc9f',
        '#9de2af',
        '#b0e8bf',
        '#c4edcf',
        '#d8f3df',
        '#ebf9ef',
        '#ffffff'

      ]} style={styles.roundview17}>
        <LinearGradient colors={['#35b257',
          // '#3bc45f',
          '#4eca6f',
          '#62d07f',
          '#76d68f',
          '#89dc9f',
          '#9de2af',
          '#b0e8bf',
          '#c4edcf',
          '#d8f3df',
          '#ebf9ef',
          '#ffffff'

        ]} style={styles.roundview16}>
          <LinearGradient colors={['#35b257',
            // '#3bc45f',
            // '#4eca6f',
            '#62d07f',
            '#76d68f',
            '#89dc9f',
            '#9de2af',
            '#b0e8bf',
            '#c4edcf',
            '#d8f3df',
            '#ebf9ef',
            '#ffffff'

          ]} style={styles.roundview15}>
            <LinearGradient colors={['#35b257',
              '#3bc45f',
              '#4eca6f',
              '#62d07f',
              '#76d68f',
              '#89dc9f',
              '#9de2af',
              '#b0e8bf',
              '#c4edcf',
              '#d8f3df',
              '#ebf9ef',
              '#ffffff'

            ]} style={styles.roundview14}>
              <LinearGradient colors={['#35b257',
                // '#3bc45f',
                // '#4eca6f',
                '#62d07f',
                '#76d68f',
                '#89dc9f',
                '#9de2af',
                '#b0e8bf',
                '#c4edcf',
                '#d8f3df',
                '#ebf9ef',
                '#ffffff'

              ]} style={styles.roundview13}>
                <LinearGradient colors={['#35b257',
                  '#3bc45f',
                  '#4eca6f',
                  '#62d07f',
                  '#76d68f',
                  '#89dc9f',
                  '#9de2af',
                  '#b0e8bf',
                  '#c4edcf',
                  '#d8f3df',
                  '#ebf9ef',
                  '#ffffff'

                ]} style={styles.roundview12}>
                  <LinearGradient colors={['#35b257',
                    // '#3bc45f',
                    // '#4eca6f',
                    '#62d07f',
                    '#76d68f',
                    '#89dc9f',
                    '#9de2af',
                    '#b0e8bf',
                    '#c4edcf',
                    '#d8f3df',
                    '#ebf9ef',
                    '#ffffff'

                  ]} style={styles.roundview11}>
                    <LinearGradient colors={['#35b257',
                      '#3bc45f',
                      '#4eca6f',
                      '#62d07f',
                      '#76d68f',
                      '#89dc9f',
                      '#9de2af',
                      '#b0e8bf',
                      '#c4edcf',
                      '#d8f3df',
                      '#ebf9ef',
                      '#ffffff'

                    ]} style={styles.roundview10}>
                      <LinearGradient colors={['#35b257',
                        // '#3bc45f',
                        // '#4eca6f',
                        '#62d07f',
                        '#76d68f',
                        '#89dc9f',
                        '#9de2af',
                        '#b0e8bf',
                        '#c4edcf',
                        '#d8f3df',
                        '#ebf9ef',
                        '#ffffff'

                      ]} style={styles.roundview9}>
                        <LinearGradient colors={['#35b257',
                          '#3bc45f',
                          '#4eca6f',
                          '#62d07f',
                          '#76d68f',
                          '#89dc9f',
                          '#9de2af',
                          '#b0e8bf',
                          '#c4edcf',
                          '#d8f3df',
                          '#ebf9ef',
                          '#ffffff'

                        ]} style={styles.roundview8}>
                          <LinearGradient colors={['#35b257',
                            // '#3bc45f',
                            // '#4eca6f',
                            '#62d07f',
                            '#76d68f',
                            '#89dc9f',
                            '#9de2af',
                            '#b0e8bf',
                            '#c4edcf',
                            '#d8f3df',
                            '#ebf9ef',
                            '#ffffff'

                          ]} style={styles.roundview7}>
                            <LinearGradient colors={['#35b257',
                              '#3bc45f',
                              '#4eca6f',
                              '#62d07f',
                              '#76d68f',
                              '#89dc9f',
                              '#9de2af',
                              '#b0e8bf',
                              '#c4edcf',
                              '#d8f3df',
                              '#ebf9ef',
                              '#ffffff'

                            ]} style={styles.roundview6}>
                              <LinearGradient colors={['#35b257',
                                // '#3bc45f',
                                // '#4eca6f',
                                '#62d07f',
                                '#76d68f',
                                '#89dc9f',
                                '#9de2af',
                                '#b0e8bf',
                                '#c4edcf',
                                '#d8f3df',
                                '#ebf9ef',
                                '#ffffff'

                              ]} style={styles.roundview5}>
                                <LinearGradient colors={['#35b257',
                                  '#3bc45f',
                                  '#4eca6f',
                                  '#62d07f',
                                  '#76d68f',
                                  '#89dc9f',
                                  '#9de2af',
                                  '#b0e8bf',
                                  '#c4edcf',
                                  '#d8f3df',
                                  '#ebf9ef',
                                  '#ffffff'

                                ]} style={styles.roundview4}>
                                  <LinearGradient colors={['#35b257',
                                    // '#3bc45f',
                                    // '#4eca6f',
                                    '#62d07f',
                                    '#76d68f',
                                    '#89dc9f',
                                    '#9de2af',
                                    '#b0e8bf',
                                    '#c4edcf',
                                    '#d8f3df',
                                    '#ebf9ef',
                                    '#ffffff'

                                  ]} style={styles.roundview3}>
                                    <LinearGradient colors={['#35b257',
                                      '#3bc45f',
                                      '#4eca6f',
                                      '#62d07f',
                                      '#76d68f',
                                      '#89dc9f',
                                      '#9de2af',
                                      '#b0e8bf',
                                      '#c4edcf',
                                      '#d8f3df',
                                      '#ebf9ef',
                                      '#ffffff'

                                    ]} style={styles.roundview2}>
                                      <LinearGradient colors={['#35b257',
                                        // '#3bc45f',
                                        // '#4eca6f',
                                        '#62d07f',
                                        '#76d68f',
                                        '#89dc9f',
                                        '#9de2af',
                                        '#b0e8bf',
                                        '#c4edcf',
                                        '#d8f3df',
                                        '#ebf9ef',
                                        '#ffffff'

                                      ]} style={styles.roundview1}>
                                        <Image source={icons.logo} style={styles.logoimg}></Image>
                                      </LinearGradient>
                                    </LinearGradient>
                                  </LinearGradient>
                                </LinearGradient>
                              </LinearGradient>
                            </LinearGradient>
                          </LinearGradient>
                        </LinearGradient>
                      </LinearGradient>
                    </LinearGradient>
                  </LinearGradient>
                </LinearGradient>
              </LinearGradient>
            </LinearGradient>
          </LinearGradient>
        </LinearGradient>
      </LinearGradient>
    </LinearGradient>

  )
}

export default Splash

