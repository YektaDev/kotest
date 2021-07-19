package io.kotest.core.listeners

import io.kotest.core.plan.Descriptor

interface DiscoveryListener {

   /**
    * Is invoked after all the [Spec] classes have been discovered.
    * This callback will be called after any [DiscoveryExtension]s have been invoked.
    *
    * In other words the descriptions given here are after discovery extensions
    * have had the chance to filter.
    *
    * @param descriptors the [Descriptor.SpecDescriptor] instance for each Spec class discovered.
    */
   fun afterDiscovery(descriptors: List<Descriptor.SpecDescriptor>): Unit = Unit
}
